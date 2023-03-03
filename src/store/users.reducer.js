import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: Math.random().toString(),
    username: 'john_doe',
    names: { first: 'John', last: 'Doe' },
    online: true,
  },
  {
    id: Math.random().toString(),
    username: 'jane_doe',
    names: { first: 'Jane', last: 'Doe' },
  }
]

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addDefaultCase((state) => state)
  },
})

export default usersSlice.reducer
