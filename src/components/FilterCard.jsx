import { IoSearchSharp } from "react-icons/io5";

const FilterCard = () => {
  return (
    <>
      <div className="bg-white px-2 py-4 rounded-md">
        <div className="flex justify-between">
          <p>Category</p>
          <button className="cursor-pointer hover:underline text-blue-500">
            Clear Filer
          </button>
        </div>

        <div className="mt-5">
            <div className="flex items-center gap-2">
                <input type="checkbox" id="mango"/>
                <label htmlFor="mango">Mango</label>
            </div>
        </div>
      </div>
    </>
  );
};

export default FilterCard;
