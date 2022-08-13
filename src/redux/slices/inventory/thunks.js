import { fetchConToken } from "../../../components/helpers/fecth";
import { setListInventory, setPaginationInventory } from "./inventorySlices";

export const getAllInventory = () => {
    return async (dispatch) => {
        try {
            let resp = await fetchConToken("almacen");
            const body = await resp.json();
    
            if (resp.status === 200) {
            dispatch(setListInventory(body.Products));
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const paginationInventory = (pageSize, pageNumber) => { 
    return async (dispatch) => {
      try {
        let resp = await fetchConToken("almacen");
  
        const body = await resp.json();
        
        if (resp.status === 200) {
            dispatch(setListInventory(body.Products));
          dispatch(setPaginationInventory(body.paginationData));
        }
      } catch (error) {
        console.log(error);
      }
    };
  };