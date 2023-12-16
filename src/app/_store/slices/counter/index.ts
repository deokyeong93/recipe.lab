import { counterSlice } from "./slice"

export * from "./selectors"

// NOTE: 프로젝트시 DELETE 대상
export const counterReducer = counterSlice.reducer
export const counterActions = counterSlice.actions
