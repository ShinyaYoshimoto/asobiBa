-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isStartPlayer" BOOLEAN NOT NULL,
    "isDraw" BOOLEAN NOT NULL,
    "fanCount" INTEGER NOT NULL,
    "symbolCount" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "isCorrect" BOOLEAN NOT NULL
);
