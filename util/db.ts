import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { db: PrismaClient };

const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
};

export const db = globalForPrisma.db || new PrismaClient().$extends({
  query: {
    vet: {
      create: ({ args, query }) => {
        if (args.data.name) {
          args.data.slug = slugify(args.data.name);
        }
        return query(args);
      },
      update: ({ args, query }) => {
        if (args.data.name) {
          args.data.slug = slugify(args.data.name.toString());
        }
        return query(args);
      },
    },
  },
});

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.db = db;
}
