-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL,
    "isStartPlayer" BOOLEAN NOT NULL,
    "isDraw" BOOLEAN NOT NULL,
    "fanCount" INTEGER NOT NULL,
    "symbolCount" INTEGER,
    "isCorrect" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);
