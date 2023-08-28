import Immeubles from "@/app/immeubles/Immeubles";
import { db } from "@/drizzle";
import { building } from "@/drizzle/schema";
import { UserButton, currentUser } from "@clerk/nextjs";

const getBuildings = async (id: number) => {
  const eeey = await db
    .select({
      id: building.id,
      name: building.name,
      address: building.address,
      city: building.city,
      surface: building.surface,
      thumbnail: building.thumbnail,
    })
    .from(building);
};

export default async function Home() {
  const user = await currentUser();
  console.log(user);

  if (!user) return null;
  // const buildings = await getBuildings(user.id);

  return <Immeubles />;
}
