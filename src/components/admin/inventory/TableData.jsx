import { PaginationInventory } from "./Pagination";

export const TableData = () => {
  
  return (
    <>
      <div className="hidden md:flex flex-row justify-between gap-4 bg-gray-100 py-3 w-full mt-12 border-b">
        <div className="w-1/4 text-center">
          <p className="text-xs md:text-sm">Pedido</p>
        </div>

        <div className="w-1/4 text-center">
          <p className="text-xs md:text-sm">Nombre del asistente</p>
        </div>

        <div className="w-1/4 text-center">
          <p className="text-xs md:text-sm">Correo Electronico</p>
        </div>
        <div className="w-1/4 text-center">
          <p className="text-xs md:text-sm mr-10">Estado</p>
        </div>
      </div>
      <PaginationInventory itemsPerPage={5} />
    </>
  );
};
