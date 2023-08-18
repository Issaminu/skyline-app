import { UserButton, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  if (!user) return null;

  console.log(user);
  return <div></div>;
}
