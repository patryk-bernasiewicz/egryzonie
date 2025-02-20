'use client';

import { editVet } from '@/actions/edit-vet';
import { Vet } from '@prisma/client';
import { ChangeEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import EditVetMapPosition from './EditVetMapPosition';

const defaultDisabledColumns = ['id', 'slug'];
const forcedDisableColumns = ['latitude', 'longitude'];
const dateColumns = ['createdAt', 'updatedAt'];

type EditVetsTableProps = {
  hideColumns?: string[];
  vets: Vet[];
};

const EditVetsTable = ({ hideColumns, vets }: EditVetsTableProps) => {
  const hiddenColumns = hideColumns || defaultDisabledColumns;
  const columns = vets.length ? Object.keys(vets[0]) : [];
  const visibleColumns = columns.filter(
    (column) => !hiddenColumns.includes(column),
  ) as (keyof Vet)[];
  const [editedIds, setEditedIds] = useState<Vet['id'][]>([]);
  const [formStates, setFormStates] = useState<Record<Vet['id'], Partial<Vet>>>(
    {},
  );
  const [vetMapOpened, setVetMapOpened] = useState<Vet | null>(null);

  useEffect(() => {
    setEditedIds([]);
    setFormStates({});
  }, [vets]);

  const handleItemClick = (vet: Vet) => {
    setEditedIds((prev) => [...prev, vet.id]);
  };

  const handleCancelEdit = (vet: Vet) => {
    setEditedIds((prev) => prev.filter((id) => id !== vet.id));
  };

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement>,
    vet: Vet,
  ) => {
    console.log('======', {
      'event.target.name': event.target.name,
      'event.target.value': event.target.value,
      vet,
    });
    setFormStates((prev) => {
      return {
        ...prev,
        [vet.id]: {
          ...prev[vet.id],
          [event.target.name]: event.target.value,
        },
      };
    });
  };

  const handleSubmit = (vet: Vet) => () => {
    if (!formStates[vet.id]) return;

    editVet(vet, formStates[vet.id] as Vet);
  };

  const displayedColumns = visibleColumns.filter(
    (column) => !forcedDisableColumns.includes(column),
  );

  return (
    <>
      <table>
        <thead>
          <tr>
            {displayedColumns.map((column) => (
              <th key={column}>{column}</th>
            ))}
            <th>map</th>
          </tr>
        </thead>
        <tbody>
          {vets.map((vet) => {
            const isEdited = editedIds.includes(vet.id);

            return (
              <tr key={vet.id} onClick={() => handleItemClick(vet)}>
                {displayedColumns.map((column, columnIndex) => (
                  <td key={column}>
                    {isEdited ? (
                      <input
                        type="text"
                        value={String(
                          formStates?.[vet.id]?.[column] ?? vet[column],
                        )}
                        name={column}
                        onChange={(event) => handleFieldChange(event, vet)}
                      />
                    ) : (
                      <>
                        {dateColumns.includes(column)
                          ? new Date(vet[column] as string).toLocaleString()
                          : String(vet[column])}
                      </>
                    )}
                    {isEdited && columnIndex === visibleColumns.length - 1 && (
                      <>
                        <button
                          className="bg-green-400"
                          type="button"
                          onClick={handleSubmit(vet)}
                        >
                          Save
                        </button>
                        <button
                          className="bg-red-400"
                          type="button"
                          onClick={() => handleCancelEdit(vet)}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </td>
                ))}
                <td>
                  <button
                    className="bg-blue-400"
                    type="button"
                    onClick={() => setVetMapOpened(vet)}
                  >
                    Set position
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {vetMapOpened &&
        createPortal(
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full overflow-hidden">
            <EditVetMapPosition
              value={{
                latitude: vetMapOpened.latitude,
                longitude: vetMapOpened.longitude,
              }}
              onChange={(lat, lng) => {
                console.log('======', { lat, lng });
              }}
            />
          </div>,
          document.body,
        )}
    </>
  );
};

export default EditVetsTable;
