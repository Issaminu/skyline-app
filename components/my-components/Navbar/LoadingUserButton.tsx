import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const UserCard = () => {
  return (
    <>
      <div className="gap-6 w-28 h-fit py-2 bg-appBackground shadow-none text-primary-foreground/60">
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="rounded-full h-20 w-20" />
          <div className="flex flex-col items-center gap-1">
            <Skeleton className="w-20 h-4" />
            <Skeleton className="w-24 h-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
