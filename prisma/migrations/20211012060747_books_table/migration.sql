-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "pic" TEXT NOT NULL,
    "author" TEXT[],

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);
