import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: Math.random().toString(),
    title: 'Le fil à couper le beurre en phase de test finale',
    content: "Des scientifiques auraient mis au point un outil ayant l'apparence d'un fil et pouvant servir à couper du beurre. Une révolution pour le monde de la tartine.",
  },
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addDefaultCase((state) => state)
  },
})

export default postsSlice.reducer
