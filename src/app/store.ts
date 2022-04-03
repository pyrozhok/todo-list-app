import { configureStore, ThunkAction, Action, bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import todoSlice from './todoSlice'

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
})

export const TodoActions = bindActionCreators(todoSlice.actions, store.dispatch)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
