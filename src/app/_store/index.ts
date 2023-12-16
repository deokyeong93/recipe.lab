import { configureStore } from "@reduxjs/toolkit"
import { counterReducer } from "./slices/counter"

const reduxStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default reduxStore
