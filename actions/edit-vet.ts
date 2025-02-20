'use server';

import { db } from '@/util/db';
import { Vet } from '@prisma/client';
import { revalidateTag } from 'next/cache';

export const editVet = async (originalVet: Vet, data: Partial<Vet>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...updatedVet } = data;
  const vet = await db.vet.update({
    where: { id: originalVet.id },
    data: updatedVet,
  });

  revalidateTag('admin-vets');

  return vet;
};
