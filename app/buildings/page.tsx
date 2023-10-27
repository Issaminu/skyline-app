import BuildingsList from "@/components/my-components/Building/BuildingsList";
import { db } from "@/drizzle";
import { building, residents } from "@/drizzle/schema";
import { eq, inArray } from "drizzle-orm";

const getBuildings = async (userId: string) => {
  const userArray = await db
    .select({ a: residents.a })
    .from(residents)
    .where(eq(residents.b, userId));
  const userBuildings = userArray.map((item) => item.a);
  const buildings = await db
    .select()
    .from(building)
    .where(inArray(building.id, userBuildings));
  return buildings;
};

export default async function Home() {
  const buildings = await getBuildings("user_2VDFoVtmHGVrqViXWV8QALiw12M");
  return (
    <div className="">
      <BuildingsList />
    </div>
  );
}
