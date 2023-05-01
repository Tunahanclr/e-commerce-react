import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/CategorySlice";
export default function Category({ setCategory }) {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  console.log(categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className=" w-64 md:w-64 flex flex-col gap-2 ">
      <div className="border-b pb-2 border-gray-200 text-xl text-center font-bold select-none">
        Kategori
      </div>
      {categories?.map((category, i) => (
        <div
          className="text-center text-black font-semibold text-xl hover:text-blue-500 transition-colors duration-300"
          key={i}
        >
          <div
            href="#"
            onClick={() => setCategory(category)}
            className="block cursor-pointer py-2 text-sm md:text-xl px-4"
          >
            {category}
          </div>
        </div>
      ))}
    </div>
  );
}
