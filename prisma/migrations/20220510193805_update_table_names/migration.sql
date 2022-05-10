-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "image" TEXT NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "houseId" INTEGER[],
    "accountStatus" VARCHAR(255) NOT NULL,
    "create_time" DATE,
    "update_time" DATE,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buildings" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1000),
    "location" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "floors" INTEGER NOT NULL,
    "images" TEXT[],
    "houseQuantity" INTEGER NOT NULL,
    "houseIDs" INTEGER[],
    "Surface" DOUBLE PRECISION NOT NULL,
    "userIDs" INTEGER[],
    "comment" VARCHAR(65535),
    "create_time" DATE,
    "update_time" DATE,

    CONSTRAINT "buildings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "houses" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(1000),
    "buildingId" INTEGER NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "images" TEXT[],
    "bedrooms" INTEGER,
    "bathrooms" INTEGER,
    "saloon" INTEGER,
    "kitchen" INTEGER,
    "userIDs" INTEGER[],
    "location" TEXT NOT NULL,
    "size" DOUBLE PRECISION NOT NULL,
    "percentangeOfBuilding" INTEGER NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "priceBuy" DOUBLE PRECISION NOT NULL,
    "comment" VARCHAR(65535),
    "expenseIDs" INTEGER[],
    "create_time" DATE,
    "update_time" DATE,

    CONSTRAINT "houses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales" (
    "id" SERIAL NOT NULL,
    "houseId" INTEGER NOT NULL,
    "houseName" VARCHAR(255) NOT NULL,
    "buildingId" VARCHAR(255) NOT NULL,
    "buildingName" VARCHAR(255) NOT NULL,
    "comment" VARCHAR(65535),
    "userIDs" INTEGER[],
    "buyMonths" INTEGER NOT NULL,
    "remainingPrice" DOUBLE PRECISION,
    "payementIDs" INTEGER[],
    "create_time" DATE,
    "update_time" DATE,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payements" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,
    "comment" VARCHAR(65535),
    "amount" DOUBLE PRECISION NOT NULL,
    "month" INTEGER NOT NULL,
    "status" VARCHAR(255),
    "houseId" INTEGER NOT NULL,
    "buildingId" VARCHAR(255) NOT NULL,
    "create_time" DATE,
    "update_time" DATE,

    CONSTRAINT "payements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expenses" (
    "id" SERIAL NOT NULL,
    "reason" VARCHAR(255) NOT NULL,
    "comment" VARCHAR(65535),
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3),
    "status" VARCHAR(255),
    "buildingId" INTEGER,
    "houseId" INTEGER,
    "create_time" DATE,
    "update_time" DATE,

    CONSTRAINT "expenses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
