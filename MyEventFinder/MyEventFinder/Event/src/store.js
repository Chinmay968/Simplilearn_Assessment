import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/EventSlice";

export default configureStore({
  reducer: {
    events: usersReducer,
  },
});
