import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.vet.createMany({
    data: [
      {
        name: "Vet 1",
        address: "Address 1",
        buildingNumber: "1",
        streetName: "Street 1",
        streetNumber: "1",
        phone: "123456789",
        email: "email@wp.pl",
        slug: "vet-1",
      },
      {
        name: "Vet 2",
        address: "Address 2",
        buildingNumber: "2",
        streetName: "Street 2",
        streetNumber: "2",
        phone: "123456789",
        email: "email@wp.pl",
        slug: "vet-2",
      },
      {
        name: "Vet 3",
        address: "Address 3",
        buildingNumber: "3",
        streetName: "Street 3",
        streetNumber: "3",
        phone: "123456789",
        email: "email@wp.pl",
        slug: "vet-3",
      },
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
