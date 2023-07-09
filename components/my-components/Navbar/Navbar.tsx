"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const Navbar = () => {
  const path = usePathname();
  const navigation = [
    {
      name: "Immeubles",
      href: "/immeubles",
      icon: HomeRoundedIcon,
      current: "/immeubles" === path,
    },
    {
      name: "Cotisations",
      href: "/cotisations",
      icon: MonetizationOnRoundedIcon,
      current: "/cotisations" === path,
    },
    {
      name: "Dépenses",
      href: "/depenses",
      icon: EngineeringRoundedIcon,
      current: "/depenses" === path,
    },
    {
      name: "Invitations",
      href: "/invitations",
      icon: EmailRoundedIcon,
      current: "/invitations" === path,
    },
  ];
  return (
    <>
      <div className="flex flex-col w-32 bg-secondary h-screen fixed items-center py-2 gap-2">
        {navigation.map((item) => (
          <Link href={item.href} key={item.name}>
            <Button className={`${item.current ? "" : ""} w-28 h-28`}>
              <div className="flex flex-col justify-center items-center gap-1">
                <item.icon />
                <div>{item.name}</div>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
