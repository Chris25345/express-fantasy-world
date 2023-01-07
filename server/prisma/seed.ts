import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.race.createMany({
    data: [{ name: "Elf" }, { name: "Dwarf" }, { name: "Human" }],
  });
  await prisma.occupation.createMany({
    data: [
      { name: "Servant" },
      { name: "Merchant" },
      { name: "Warrior" },
      { name: "Scientist" },
    ],
  });
  await prisma.humanoid.createMany({
    data: [
      { name: "Navrour", gender: "Female", age: 489, raceId: 1 },
      { name: "Vixen", gender: "Female", age: 200, raceId: 3 },
      { name: "Kidmuc", gender: "Male", age: 623, raceId: 2 },
      { name: "Elashor", gender: "Female", age: 400, raceId: 1 },
      { name: "Skatrirlun", gender: "Male", age: 100, raceId: 2 },
      { name: "Kate", gender: "Female", age: 40, raceId: 3 },
      { name: "Navarre", gender: "Male", age: 8000, raceId: 1 },
      { name: "Elmnith", gender: "Female", age: 333, raceId: 2 },
      { name: "Othorion", gender: "Male", age: 5600, raceId: 1 },
      { name: "Raven", gender: "Female", age: 10000, raceId: 1 },
      { name: "Logen", gender: "Female", age: 200, raceId: 3 },
      { name: "Mandragoran", gender: "Male", age: 623, raceId: 2 },
      { name: "Jessica", gender: "Female", age: 200, raceId: 1 },
      { name: "Anomander", gender: "Male", age: 100, raceId: 2 },
    ],
  });
  await prisma.humanoids_Occupations.createMany({
    data: [
      { humanoidId: 1, occupationId: 3 },
      { humanoidId: 2, occupationId: 1 },
      { humanoidId: 3, occupationId: 2 },
      { humanoidId: 4, occupationId: 4 },
      { humanoidId: 5, occupationId: 3 },
      { humanoidId: 6, occupationId: 2 },
      { humanoidId: 7, occupationId: 4 },
      { humanoidId: 8, occupationId: 2 },
      { humanoidId: 9, occupationId: 4 },
      { humanoidId: 10, occupationId: 2 },
      { humanoidId: 11, occupationId: 4 },
      { humanoidId: 12, occupationId: 2 },
      { humanoidId: 13, occupationId: 4 },
      { humanoidId: 14, occupationId: 3 },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
