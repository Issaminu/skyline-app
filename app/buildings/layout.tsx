import BuildingHeader from "@/components/my-components/Building/BuildingHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="headerBackground flex flex-col">
      <BuildingHeader />
      {children}
    </div>
  );
};

export default layout;
