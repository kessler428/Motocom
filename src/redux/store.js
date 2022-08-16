import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { inventorySlice } from "./slices/inventory/inventorySlices";
import { creditsSlice } from "./slices/Credits/creditsSlices";
import { reportsSlice } from "./slices/reports/reportSlices";
import { uiSlice } from "./slices/ui/uiSlices";

const reducers = combineReducers({
  ui: uiSlice.reducer,
  inventory: inventorySlice.reducer,
  credits : creditsSlice.reducer,
  reports: reportsSlice.reducer
});

const rootPersistConfig = {
  key:'root',
  storage,
}

const persistedReducer = persistReducer(rootPersistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
