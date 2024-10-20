-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavoriteQuestion" (
    "id" SERIAL NOT NULL,
    "questionId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "FavoriteQuestion_pkey" PRIMARY KEY ("id")
);
