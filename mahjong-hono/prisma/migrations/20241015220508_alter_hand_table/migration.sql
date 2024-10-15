/*
  Warnings:

  - Added the required column `nameKana` to the `Hand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hand" ADD COLUMN     "nameKana" TEXT NOT NULL;
