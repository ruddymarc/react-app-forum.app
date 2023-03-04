import { createSlice, createAction } from '@reduxjs/toolkit';

const actions = {
  addPost: createAction('ADD_POST'),
  deletePost: createAction('DELETE_POST'),
};

const initialState = [
  {
    id: Math.random().toString(),
    title: 'Le fil à couper le beurre en phase de test finale',
    content: "Des scientifiques auraient mis au point un outil ayant l'apparence d'un fil et pouvant servir à couper du beurre. Une révolution pour le monde de la tartine.",
  },
];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.deletePost, (state, action) => [
        ...state.filter((item) => item.id !== action.payload)
      ])
      .addCase(actions.addPost, (state, action) => [
        ...state, action.payload
      ])
      .addDefaultCase((state) => state)
    ;
  },
});

export const { addPost, deletePost } = actions;
export default postsSlice.reducer;
