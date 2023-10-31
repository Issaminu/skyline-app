import BuildingsList from "@/components/my-components/Building/BuildingsList";
import prisma from "@/prisma/prisma";
import { currentUser } from "@clerk/nextjs";

const getBuildings = async (userId: string) => {
  return await prisma.building.findMany({
    where: {
      residents: {
        some: {
          id: userId,
        },
      },
    },
  });
};

export default async function Home() {
  const user = await currentUser();
  if (!user) return;
  // console.log(user);
  const buildings = await getBuildings(user.id);
  console.log(buildings);

  return (
    <div className="">
      <BuildingsList />
    </div>
  );
}
