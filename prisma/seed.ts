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
        address: "Oborniki, Lipowa 15A",
        phone: "612960123",
        email: "cztery.lapy@gmail.com",
        slug: "przychodnia-weterynaryjna-cztery-lapy",
        latitude: centralLat,
        longitude: centralLon,
      },
      {
        name: "Gabinet Weterynaryjny Futrzak",
        address: "Rogoźno, Dworcowa 5",
        phone: "672610789",
        email: "futrzak.vet@gmail.com",
        slug: "gabinet-weterynaryjny-futrzak",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Lecznicy Weterynaryjnej Pod Pelikanem",
        address: "Ryczywół, Kolejowa 22",
        phone: "612967890",
        email: "pelikan.vet@wp.pl",
        slug: "lecznica-weterynaryjna-pod-pelikanem",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Centrum Weterynaryjne Animals",
        address: "Szamotuły, Poznańska 3",
        phone: "612345678",
        email: "animals.centrum@gmail.com",
        slug: "centrum-weterynaryjne-animals",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Klinika Weterynaryjna Happy Pet",
        address: "Murowana Goślina, Polna 45",
        phone: "618567234",
        email: "happy.pet@wp.pl",
        slug: "klinika-weterynaryjna-happy-pet",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Przychodnia dla Zwierząt Pupil",
        address: "Wągrowiec, Kościuszki 12",
        phone: "672345789",
        email: "pupil.wet@gmail.com",
        slug: "przychodnia-dla-zwierzat-pupil",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Gabinet Weterynaryjny Dr Dolittle",
        address: "Chodzież, Mickiewicza 78",
        phone: "672345123",
        email: "drdolittle@wp.pl",
        slug: "gabinet-weterynaryjny-dr-dolittle",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Klinika Weterynaryjna PetMed",
        address: "Połajewo, Piłsudskiego 33",
        phone: "614567890",
        email: "petmed@gmail.com",
        slug: "klinika-weterynaryjna-petmed",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Centrum Zdrowia Zwierząt VetCare",
        address: "Czarnków, Kościelna 55",
        phone: "672345678",
        email: "vetcare@wp.pl",
        slug: "centrum-zdrowia-zwierzat-vetcare",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Lecznica Małych Zwierząt Łapka",
        address: "Lubasz, Ogrodowa 17",
        phone: "672345789",
        email: "lapka.vet@gmail.com",
        slug: "lecznica-malych-zwierzat-lapka",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Przychodnia Weterynaryjna Zwierzaki",
        address: "Obrzycko, Słoneczna 28",
        phone: "612348765",
        email: "zwierzaki.vet@wp.pl",
        slug: "przychodnia-weterynaryjna-zwierzaki",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Gabinet Weterynaryjny Animal Care",
        address: "Wronki, Powstańców Wielkopolskich 9",
        phone: "612349876",
        email: "animalcare@gmail.com",
        slug: "gabinet-weterynaryjny-animal-care",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Klinika Dla Zwierząt PetVet",
        address: "Ostroróg, Kwiatowa 42",
        phone: "614567123",
        email: "petvet@wp.pl",
        slug: "klinika-dla-zwierzat-petvet",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Przychodnia Weterynaryjna Zdrowa Łapa",
        address: "Pniewy, Wolności 61",
        phone: "614568234",
        email: "zdrowa.lapa@gmail.com",
        slug: "przychodnia-weterynaryjna-zdrowa-lapa",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Gabinet Weterynaryjny Przyjaciel",
        address: "Sieraków, Sikorskiego 14",
        phone: "612345987",
        email: "przyjaciel.vet@wp.pl",
        slug: "gabinet-weterynaryjny-przyjaciel",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Centrum Weterynaryjne VetLife",
        address: "Kwilcz, Chopina 37",
        phone: "614569876",
        email: "vetlife@gmail.com",
        slug: "centrum-weterynaryjne-vetlife",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Lecznica Weterynaryjna Animal Health",
        address: "Międzychód, Reymonta 25",
        phone: "957345678",
        email: "animal.health@wp.pl",
        slug: "lecznica-weterynaryjna-animal-health",
        ...generateRandomCoordinate(centralLat, centralLon, radiusInKm),
      },
      {
        name: "Przychodnia dla Zwierząt Domowych Azor",
        address: "Drawsko, Sportowa 8",
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
