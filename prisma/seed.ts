import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function generateRandomCoordinate(lat: number, lon: number, radiusInKm: number) {
  const radiusInDegrees = radiusInKm / 111.32;
  const u = Math.random();
  const v = Math.random();
  const w = radiusInDegrees * Math.sqrt(u);
  const t = 2 * Math.PI * v;
  const x = w * Math.cos(t);
  const y = w * Math.sin(t);

  const newLat = lat + y;
  const newLon = lon + x;

  return { latitude: newLat, longitude: newLon };
}

async function main() {
  const centralLat = 52.70629791753231;
  const centralLon = 16.380865410634094;
  const radiusInKm = 40;

  await prisma.vet.createMany({
    data: [
      {
        name: "Przychodnia Weterynaryjna Cztery Łapy",
        address: "Oborniki",
        buildingNumber: "15A",
        streetName: "Lipowa",
        streetNumber: "15A",
        phone: "612960123",
        email: "cztery.lapy@gmail.com",
        slug: "przychodnia-weterynaryjna-cztery-lapy",
        latitude: centralLat,
        longitude: centralLon,
      },
      {
        name: "Gabinet Weterynaryjny Futrzak",
        address: "Rogoźno",
        buildingNumber: "5",
        streetName: "Dworcowa",
        streetNumber: "5",
        phone: "672610789",
        email: "futrzak.vet@gmail.com",
        slug: "gabinet-weterynaryjny-futrzak",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Lecznicy Weterynaryjnej Pod Pelikanem",
        address: "Ryczywół",
        buildingNumber: "22",
        streetName: "Kolejowa",
        streetNumber: "22",
        phone: "612967890",
        email: "pelikan.vet@wp.pl",
        slug: "lecznica-weterynaryjna-pod-pelikanem",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Centrum Weterynaryjne Animals",
        address: "Szamotuły",
        buildingNumber: "3",
        streetName: "Poznańska",
        streetNumber: "3",
        phone: "612345678",
        email: "animals.centrum@gmail.com",
        slug: "centrum-weterynaryjne-animals",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Klinika Weterynaryjna Happy Pet",
        address: "Murowana Goślina",
        buildingNumber: "45",
        streetName: "Polna",
        streetNumber: "45",
        phone: "618567234",
        email: "happy.pet@wp.pl",
        slug: "klinika-weterynaryjna-happy-pet",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Przychodnia dla Zwierząt Pupil",
        address: "Wągrowiec",
        buildingNumber: "12",
        streetName: "Kościuszki",
        streetNumber: "12",
        phone: "672345789",
        email: "pupil.wet@gmail.com",
        slug: "przychodnia-dla-zwierzat-pupil",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Gabinet Weterynaryjny Dr Dolittle",
        address: "Chodzież",
        buildingNumber: "78",
        streetName: "Mickiewicza",
        streetNumber: "78",
        phone: "672345123",
        email: "drdolittle@wp.pl",
        slug: "gabinet-weterynaryjny-dr-dolittle",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Klinika Weterynaryjna PetMed",
        address: "Połajewo",
        buildingNumber: "33",
        streetName: "Piłsudskiego",
        streetNumber: "33",
        phone: "614567890",
        email: "petmed@gmail.com",
        slug: "klinika-weterynaryjna-petmed",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Centrum Zdrowia Zwierząt VetCare",
        address: "Czarnków",
        buildingNumber: "55",
        streetName: "Kościelna",
        streetNumber: "55",
        phone: "672345678",
        email: "vetcare@wp.pl",
        slug: "centrum-zdrowia-zwierzat-vetcare",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Lecznica Małych Zwierząt Łapka",
        address: "Lubasz",
        buildingNumber: "17",
        streetName: "Ogrodowa",
        streetNumber: "17",
        phone: "672345789",
        email: "lapka.vet@gmail.com",
        slug: "lecznica-malych-zwierzat-lapka",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Przychodnia Weterynaryjna Zwierzaki",
        address: "Obrzycko",
        buildingNumber: "28",
        streetName: "Słoneczna",
        streetNumber: "28",
        phone: "612348765",
        email: "zwierzaki.vet@wp.pl",
        slug: "przychodnia-weterynaryjna-zwierzaki",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Gabinet Weterynaryjny Animal Care",
        address: "Wronki",
        buildingNumber: "9",
        streetName: "Powstańców Wielkopolskich",
        streetNumber: "9",
        phone: "612349876",
        email: "animalcare@gmail.com",
        slug: "gabinet-weterynaryjny-animal-care",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Klinika Dla Zwierząt PetVet",
        address: "Ostroróg",
        buildingNumber: "42",
        streetName: "Kwiatowa",
        streetNumber: "42",
        phone: "614567123",
        email: "petvet@wp.pl",
        slug: "klinika-dla-zwierzat-petvet",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Przychodnia Weterynaryjna Zdrowa Łapa",
        address: "Pniewy",
        buildingNumber: "61",
        streetName: "Wolności",
        streetNumber: "61",
        phone: "614568234",
        email: "zdrowa.lapa@gmail.com",
        slug: "przychodnia-weterynaryjna-zdrowa-lapa",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Gabinet Weterynaryjny Przyjaciel",
        address: "Sieraków",
        buildingNumber: "14",
        streetName: "Sikorskiego",
        streetNumber: "14",
        phone: "612345987",
        email: "przyjaciel.vet@wp.pl",
        slug: "gabinet-weterynaryjny-przyjaciel",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Centrum Weterynaryjne VetLife",
        address: "Kwilcz",
        buildingNumber: "37",
        streetName: "Chopina",
        streetNumber: "37",
        phone: "614569876",
        email: "vetlife@gmail.com",
        slug: "centrum-weterynaryjne-vetlife",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Lecznica Weterynaryjna Animal Health",
        address: "Międzychód",
        buildingNumber: "25",
        streetName: "Reymonta",
        streetNumber: "25",
        phone: "957345678",
        email: "animal.health@wp.pl",
        slug: "lecznica-weterynaryjna-animal-health",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Przychodnia dla Zwierząt Domowych Azor",
        address: "Drawsko",
        buildingNumber: "8",
        streetName: "Sportowa",
        streetNumber: "8",
        phone: "672345098",
        email: "azor.vet@gmail.com",
        slug: "przychodnia-dla-zwierzat-domowych-azor",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
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