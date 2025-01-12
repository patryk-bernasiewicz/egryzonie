import { ReactNode } from 'react';

type VetsLayoutProps = {
  children: ReactNode;
  search: ReactNode;
  map: ReactNode;
};

const VetsLayout = async ({ children, search, map }: VetsLayoutProps) => {
  return (
    <div
      key="vets-layout"
      className="flex h-full grow flex-col justify-between gap-4 md:flex-row"
    >
      {search}
      {children}
      {map}
    </div>
  );
};

export default VetsLayout;
