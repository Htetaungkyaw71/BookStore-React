import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const app_id = "QBfrtGGb2bhJEWgNZcO3";
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${app_id}/books`;

const initialState = [];
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOK = 'GET_BOOK';

// const bookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_BOOK:
//       console.log("ok")
//       return [...state, action.payload];
//     case ADD_BOOK:
//       return [...state, action.payload];
//     case REMOVE_BOOK:
//       return state.filter((item) => item.id !== action.id);
//     default:
//       return state;
//   }
// };

// export const addBook = (book) => ({
//   type: ADD_BOOK,
//   payload: book,
// });


export const removeBooks = createAsyncThunk("books/removeBooks",async (data) => {
  const response = await fetch(`${url}/${data.item_id}`,{
    method:"DELETE",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)
  });
  return response.json();
})

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  const response = await fetch(url);
  const data = await response.json()
  return data;
})

export const addBooks = createAsyncThunk("books/addBooks",async (data) => {
  const response = await fetch(url,{
    method:"POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(data)
  });
  return response.json();
})


const bookSlice = createSlice({
  name:"books",
  initialState:{
    books:[],
    status:null
  },
  extraReducers:{
    [getBooks.pending] : (state)=>{
        state.status = "loading"
    },
    [getBooks.fulfilled] : (state,action)=>{
      state.status = "success",
      state.books = action.payload
    },
    [getBooks.rejected] : (state)=>{
      state.status = "failed"
    }
  }
})

export default bookSlice.reducer;
