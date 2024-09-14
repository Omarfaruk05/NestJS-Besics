/*
  Warnings:

  - You are about to drop the `empolyees` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "empolyees";

-- CreateTable
CREATE TABLE "employees" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employees_name_key" ON "employees"("name");

-- CreateIndex
CREATE UNIQUE INDEX "employees_email_key" ON "employees"("email");
