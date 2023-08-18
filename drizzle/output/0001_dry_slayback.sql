ALTER TABLE "Building" DROP CONSTRAINT "Building_creatorId_fkey";
--> statement-breakpoint
ALTER TABLE "House" DROP CONSTRAINT "House_buildingId_fkey";
--> statement-breakpoint
ALTER TABLE "Contribution" DROP CONSTRAINT "Contribution_houseId_fkey";
--> statement-breakpoint
ALTER TABLE "Contribution" DROP CONSTRAINT "Contribution_contributorId_fkey";
--> statement-breakpoint
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_adminId_fkey";
--> statement-breakpoint
ALTER TABLE "Invitation" DROP CONSTRAINT "Invitation_houseId_fkey";
--> statement-breakpoint
ALTER TABLE "Invitation" DROP CONSTRAINT "Invitation_senderId_fkey";
--> statement-breakpoint
ALTER TABLE "Invitation" DROP CONSTRAINT "Invitation_receiverId_fkey";
--> statement-breakpoint
ALTER TABLE "_Admins" DROP CONSTRAINT "_Admins_A_fkey";
--> statement-breakpoint
ALTER TABLE "_Admins" DROP CONSTRAINT "_Admins_B_fkey";
--> statement-breakpoint
ALTER TABLE "_Residents" DROP CONSTRAINT "_Residents_A_fkey";
--> statement-breakpoint
ALTER TABLE "_Residents" DROP CONSTRAINT "_Residents_B_fkey";
--> statement-breakpoint
ALTER TABLE "Session" DROP CONSTRAINT "Session_user_id_fkey";
--> statement-breakpoint
ALTER TABLE "Key" DROP CONSTRAINT "Key_user_id_fkey";
--> statement-breakpoint
ALTER TABLE "Building" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "Building" ALTER COLUMN "updatedAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "User" ALTER COLUMN "updatedAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "House" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "House" ALTER COLUMN "updatedAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "Contribution" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "Contribution" ALTER COLUMN "updatedAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "Expense" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "Expense" ALTER COLUMN "updatedAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "Invitation" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "Invitation" ALTER COLUMN "updatedAt" SET DEFAULT now();--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Building" ADD CONSTRAINT "Building_creatorId_User_id_fk" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "House" ADD CONSTRAINT "House_buildingId_Building_id_fk" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_houseId_House_id_fk" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_contributorId_User_id_fk" FOREIGN KEY ("contributorId") REFERENCES "User"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Expense" ADD CONSTRAINT "Expense_adminId_User_id_fk" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_houseId_House_id_fk" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_senderId_User_id_fk" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_receiverId_User_id_fk" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "_Admins" ADD CONSTRAINT "_Admins_A_Building_id_fk" FOREIGN KEY ("A") REFERENCES "Building"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "_Admins" ADD CONSTRAINT "_Admins_B_User_id_fk" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "_Residents" ADD CONSTRAINT "_Residents_A_Building_id_fk" FOREIGN KEY ("A") REFERENCES "Building"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "_Residents" ADD CONSTRAINT "_Residents_B_User_id_fk" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Session" ADD CONSTRAINT "Session_user_id_User_id_fk" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Key" ADD CONSTRAINT "Key_user_id_User_id_fk" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
