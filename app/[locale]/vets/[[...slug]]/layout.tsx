import { ReactNode } from "react";

type VetsLayoutProps = {
  children: ReactNode;
  search: ReactNode;
  map: ReactNode;
};

const VetsLayout = async ({ children, search, map }: VetsLayoutProps) => {
  return (
    <div key="vets-layout">
      <div className="relative z-10">
        <div>vets layout top</div>
        <div>Search top</div>
        {search}
        <div>Search bottom</div>
      </div>
      <div className="relative z-0">{children}</div>
      <div className="relative z-10">
        <div>vets layout bottom</div>
      </div>
      {map}
    </div>
  );
};

export default VetsLayout;
