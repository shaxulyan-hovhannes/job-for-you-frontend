import { useDispatch, useSelector, useStore } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import jobsSlice from "@/store/jobs/jobsSlice";
import storageSlice from "@/store/storage/storageSlice";
import employersSlice from "@/store/employers/employersSlice";
import userSlice from "@/store/user/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      jobs: jobsSlice,
      storage: storageSlice,
      employers: employersSlice,
      user: userSlice,
    },
  });
};

type AppStore = ReturnType<typeof makeStore>;
type RootState = ReturnType<AppStore["getState"]>;
type AppDispatch = AppStore["dispatch"];

export type { AppStore, RootState, AppDispatch };

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<RootState>();
const useAppStore = useStore.withTypes<AppStore>();

export { useAppDispatch, useAppSelector, useAppStore };
