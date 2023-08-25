import Immeubles from "@/app/immeubles/Immeubles";
import { UserButton, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  if (!user) return null;

  return <Immeubles />;
}
