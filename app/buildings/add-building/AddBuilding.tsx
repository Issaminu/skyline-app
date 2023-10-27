import { Card } from "@/components/ui/card";

const AddBuilding = () => {
  return (
    <div className="flex justify-center items-center">
      <Card>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-2xl">Add Building</span>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Building Name</label>
              <input
                type="text"
                placeholder="Enter building name"
                className="w-96"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Building Address</label>
              <input
                type="text"
                placeholder="Enter building address"
                className="w-96"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Building Description</label>
              <textarea
                placeholder="Enter building description"
                className="w-96"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AddBuilding;
