/*
  Warnings:

  - Added the required column `updatedAt` to the `Answer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Answer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isStartPlayer" BOOLEAN NOT NULL,
    "isDraw" BOOLEAN NOT NULL,
    "fanCount" INTEGER NOT NULL,
    "symbolCount" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Answer" ("fanCount", "id", "isCorrect", "isDraw", "isStartPlayer", "score", "symbolCount") SELECT "fanCount", "id", "isCorrect", "isDraw", "isStartPlayer", "score", "symbolCount" FROM "Answer";
DROP TABLE "Answer";
ALTER TABLE "new_Answer" RENAME TO "Answer";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
