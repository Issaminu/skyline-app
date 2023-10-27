DO $$ BEGIN
 CREATE TYPE "HouseStatus" AS ENUM('RESERVED', 'OCCUPIED', 'AVAILABLE');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "_Admins" (
	"A" integer NOT NULL,
	"B" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Building" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"city" text NOT NULL,
	"address" text NOT NULL,
	"surface" double precision NOT NULL,
	"thumbnail" text NOT NULL,
	"creatorId" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT now() NOT NULL,
	"updatedAt" timestamp(3) DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Contribution" (
	"id" serial PRIMARY KEY NOT NULL,
	"amount" double precision NOT NULL,
	"contributorId" text NOT NULL,
	"houseId" integer NOT NULL,
	"createdAt" timestamp(3) DEFAULT now() NOT NULL,
	"updatedAt" timestamp(3) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Expense" (
	"id" serial PRIMARY KEY NOT NULL,
	"beneficiary" text NOT NULL,
	"adminId" text NOT NULL,
	"amount" double precision NOT NULL,
	"explanation" text NOT NULL,
	"createdAt" timestamp(3) DEFAULT now() NOT NULL,
	"updatedAt" timestamp(3) DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "House" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"size" double precision NOT NULL,
	"status" "HouseStatus" NOT NULL,
	"buildingId" integer NOT NULL,
	"createdAt" timestamp(3) DEFAULT now() NOT NULL,
	"updatedAt" timestamp(3) DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Invitation" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" text NOT NULL,
	"senderId" text NOT NULL,
	"receiverId" text NOT NULL,
	"houseId" integer NOT NULL,
	"createdAt" timestamp(3) DEFAULT now() NOT NULL,
	"updatedAt" timestamp(3) DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "_Residents" (
	"A" integer NOT NULL,
	"B" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "User" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"image" text NOT NULL,
	"isEmailVerified" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp(3) DEFAULT now() NOT NULL,
	"updatedAt" timestamp(3) DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "_Admins_AB_unique" ON "_Admins" ("A","B");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "_Admins_B_index" ON "_Admins" ("B");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "_Residents_AB_unique" ON "_Residents" ("A","B");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "_Residents_B_index" ON "_Residents" ("B");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User" ("email");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "User_id_email_idx" ON "User" ("id","email");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "User_id_key" ON "User" ("id");--> statement-breakpoint
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
 ALTER TABLE "Building" ADD CONSTRAINT "Building_creatorId_User_id_fk" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE restrict ON UPDATE cascade;
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
 ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_houseId_House_id_fk" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE restrict ON UPDATE cascade;
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
 ALTER TABLE "House" ADD CONSTRAINT "House_buildingId_Building_id_fk" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE restrict ON UPDATE cascade;
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
 ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_houseId_House_id_fk" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE restrict ON UPDATE cascade;
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
