-- CreateTable
CREATE TABLE "Localisation" (
    "id" SERIAL NOT NULL,
    "world" TEXT NOT NULL,
    "coordinates" JSONB NOT NULL,
    "description" TEXT NOT NULL,
    "places" JSONB NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Localisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "background" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "localisationId" INTEGER NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chronology" (
    "id" SERIAL NOT NULL,
    "events" JSONB NOT NULL,
    "plot" BOOLEAN NOT NULL,
    "localisationId" INTEGER NOT NULL,

    CONSTRAINT "Chronology_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_localisationId_fkey" FOREIGN KEY ("localisationId") REFERENCES "Localisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chronology" ADD CONSTRAINT "Chronology_localisationId_fkey" FOREIGN KEY ("localisationId") REFERENCES "Localisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
