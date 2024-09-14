-- CreateEnum
CREATE TYPE "Role" AS ENUM ('INTERN', 'ENGINEER', 'ADMIN');

-- CreateTable
CREATE TABLE "empolyees" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "empolyees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "empolyees_name_key" ON "empolyees"("name");

-- CreateIndex
CREATE UNIQUE INDEX "empolyees_email_key" ON "empolyees"("email");
