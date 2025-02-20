import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Vet } from '@prisma/client';
import { cn } from 'clsx-for-tailwind';
import { MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/Button/Button';
import TextInput from '@/components/TextInput/TextInput';
import { ReactComponent as CartIcon } from '@/svg/cart.svg';

import EditVetMapPosition from './EditVetMapPosition';
import type { ViewType } from './EditableVetsList';

type EditableVetsItemProps = {
  vet: Vet;
  viewType: ViewType;
};

const validationSchema = yup
  .object()
  .shape({
    name: yup.string().required().min(1),
    address: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email().required(),
    latitude: yup.string().required(),
    longitude: yup.string().required(),
    slug: yup.string().required(),
  })
  .required();

const EditableVetsItem = ({ vet }: EditableVetsItemProps) => {
  const [isEditMode, setEditMode] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      name: vet.name,
      address: vet.address || '',
      phone: vet.phone || '',
      email: vet.email || '',
      latitude: String(vet.latitude),
      longitude: String(vet.longitude),
      slug: vet.slug,
    },
  });

  const handleSetEdit = () => {
    setEditMode(true);
  };

  const handleMapChange = (latitude: number, longitude: number) => {
    setValue('latitude', String(latitude));
    setValue('longitude', String(longitude));
  };

  const resetMapPosition = () => {
    setValue('latitude', String(vet.latitude));
    setValue('longitude', String(vet.longitude));
  };

  const handleCancelEdit = (event: MouseEvent) => {
    setEditMode(false);
    reset();
    event.stopPropagation();
  };

  const values = watch();

  return (
    <div
      className={cn(
        'w-full rounded-lg bg-slate-100 p-2',
        !isEditMode && 'cursor-pointer',
      )}
      onClick={handleSetEdit}
    >
      {isEditMode ? (
        <form onSubmit={handleSubmit((d) => console.log(d))}>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col md:items-end">
              <EditVetMapPosition
                key={vet.id}
                value={{
                  latitude: Number(values.latitude),
                  longitude: Number(values.longitude),
                }}
                onChange={handleMapChange}
              />
              <button type="button" onClick={resetMapPosition}>
                Reset map position
              </button>
            </div>
            <div className="flex grow flex-col gap-y-2">
              <TextInput
                {...register('name')}
                label="Nazwa"
                error={errors.name}
                className="text-lg"
              />
              <TextInput
                {...register('address')}
                label="Adres"
                error={errors.address}
              />
              <TextInput
                {...register('phone')}
                label="Telefon"
                error={errors.phone}
              />
              <TextInput
                {...register('email')}
                label="Adres e-mail"
                error={errors.email}
              />
              <TextInput
                {...register('slug')}
                label="Slug"
                disabled
                error={errors.slug}
              />
              <div className="mt-2 flex flex-col gap-2 md:flex-row md:justify-end">
                <Button
                  variant="primary"
                  type="submit"
                  className="grow md:grow-0"
                >
                  Save
                </Button>
                <Button
                  variant="secondary"
                  type="button"
                  onClick={handleCancelEdit}
                  className="grow md:grow-0"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className="flex items-center gap-x-2">
          <CartIcon className="mx-2 h-8 w-8" />
          <div className="flex flex-col gap-y-2">
            <h2>{vet.name}</h2>
            <address>Adres: {vet.address}</address>
            <p>Telefon: {vet.phone}</p>
            <p>E-mail: {vet.email}</p>
            <div className="item-center flex gap-1">
              <p>Slug:</p>
              <pre>{vet.slug}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableVetsItem;
