import { configureStore} from '@reduxjs/toolkit'
import { shoppingCartSlice } from '../reducer/shoppingCartReducer'


export const store = configureStore({
  reducer: ({
    shoppingCart: shoppingCartSlice
  }),
})
