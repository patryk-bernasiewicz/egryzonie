'use server';

import { Prisma, Vet } from '@prisma/client';
import { revalidateTag } from 'next/cache';

import { db } from '@/util/db';

import { EditVetFormValues } from '../types';

export const editVet = async (originalVet: Vet, data: EditVetFormValues) => {
  const updateData: Prisma.VetUpdateInput = {
    name: data.name,
    address: data.address,
    phone: data.phone,
    email: data.email,
    latitude: Number(data.latitude),
    longitude: Number(data.longitude),
  };

  const { id } = originalVet;
  const vet = await db.vet.update({
    where: { id },
    data: updateData,
  });

  revalidateTag('admin-vets');

  return vet;
};
