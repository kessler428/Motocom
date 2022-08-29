import React from "react";
import { AiOutlineSearch, AiOutlineClear } from "react-icons/ai";

export const GridSearchBar = ({ searchProduct, setSearchProduct }) => {

  const handleInputChange = ({ target }) => {
    setSearchProduct(target.value);
  };

  const reset = () => {
    setSearchProduct('')
  }

  return (
    <>
      <div className="flex flex-row items-end justify-between gap-2 mb-8">
        <form
          className="bg-transparent flex justify-between w-9/12 md:w-10/12"
          onSubmit={onsubmit}
        >
          <div className="flex flex-row w-full mt-10 justify-center  bg-white">
            <div className="w-full flex flex-row border-2 border-gray-700 rounded-md">
              <AiOutlineSearch className="h-12 w-12 px-4" />
              <input
                className="w-full bg-white py-2 outline-none rounded-lg"
                placeholder="Buscar por nombre"
                type="text"
                name="search"
                value={searchProduct}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
        <div 
          className="w-4/12 md:w-2/12 flex flex-row border-2 md:px-2 border-gray-700 rounded-md hover:bg-gray-200  bg-white py-3 items-center justify-center cursor-pointer"
          onClick={ reset }
        >
          <AiOutlineClear className="mr-2" />
          <p>Limpiar</p>
        </div>
      </div>
    </>
  );
};
