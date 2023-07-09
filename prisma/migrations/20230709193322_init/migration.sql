/*
  Warnings:

  - You are about to drop the column `location` on the `Building` table. All the data in the column will be lost.
  - Added the required column `address` to the `Building` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Building" DROP COLUMN "location",
ADD COLUMN     "address" TEXT NOT NULL;
