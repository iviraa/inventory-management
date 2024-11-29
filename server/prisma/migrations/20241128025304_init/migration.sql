/*
  Warnings:

  - You are about to drop the column `totalValue` on the `ExpenseSummary` table. All the data in the column will be lost.
  - You are about to drop the column `totalValue` on the `PurchaseSummary` table. All the data in the column will be lost.
  - You are about to drop the column `timeStamp` on the `Purchases` table. All the data in the column will be lost.
  - You are about to drop the column `quanitity` on the `Sales` table. All the data in the column will be lost.
  - Added the required column `totalExpenses` to the `ExpenseSummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPurchased` to the `PurchaseSummary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timestamp` to the `Purchases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExpenseSummary" DROP COLUMN "totalValue",
ADD COLUMN     "totalExpenses" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "PurchaseSummary" DROP COLUMN "totalValue",
ADD COLUMN     "totalPurchased" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Purchases" DROP COLUMN "timeStamp",
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "quanitity",
ADD COLUMN     "quantity" INTEGER NOT NULL;
