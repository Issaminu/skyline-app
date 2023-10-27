"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddRounded } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BuildingHeader = () => {
  const pathname = usePathname();
  const [listBuilding, setListBuilding] = useState(false);

  useEffect(() => {
    setListBuilding(pathname === "/buildings");
  }, [pathname]);

  return (
    <header className="flex flex-row justify-between w-full p-6">
      <Link href="/buildings">
        <span className="font-extrabold text-4xl text-primary">Buildings</span>
      </Link>
      <div className="flex flex-row gap-4">
        {listBuilding && (
          <Link
            className={`${buttonVariants({ variant: "default" })}`}
            href={"/buildings/add-building"}
          >
            <AddRounded />
            Add Building
          </Link>
        )}{" "}
        <Input placeholder="Search buildings..." className="w-92"></Input>
      </div>
    </header>
  );
};

export default BuildingHeader;
