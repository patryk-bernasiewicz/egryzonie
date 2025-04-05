import { Vet } from '@prisma/client';

import { SortDirection } from '@/types/sort-direction';

export type VetSortByOption = keyof Vet;

export type EditVetFormValues = {
  name: string;
  address: string;
  phone: string;
  email: string;
  latitude: string;
  longitude: string;
  slug: string;
};

export type EditVetsPageParams = {
  search?: string;
  page?: number;
  hideColumns?: string[];
  sortBy?: VetSortByOption;
  sortDirection?: SortDirection;
};
