import { Input } from "@/components/ui/input";

const Buildings = () => {
  return (
    <div className="flex flex-col">
      <header className="flex flex-row justify-between bg-gray-300 w-full p-6">
        <span className="font-extrabold text-4xl text-primary">Buildings</span>
        <Input placeholder="Search buildings..." className="w-92"></Input>
      </header>
      <div className=""></div>
    </div>
  );
};

export default Buildings;
