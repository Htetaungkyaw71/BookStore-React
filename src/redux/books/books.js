/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const APP_ID = 'QBfrtGGb2bhJEWgNZcO3';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

export const removeBooks = createAsyncThunk('books/removeBooks', async (data) => {
  const response = await fetch(`${url}/${data.item_id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
});

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

export const addBooks = createAsyncThunk('books/addBooks', async (data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: null,
  },
  reducers: {
    addBookOne: (state, action) => {
      const data = { ...action.payload };
      state.books.push(data);
    },
    removeBookOne: (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload.item_id,
      );
    },
  },

  extraReducers: {
    [getBooks.pending]: (state) => {
      state.status = 'loading';
    },
    [getBooks.fulfilled]: (state, action) => {
      state.status = 'success';
      const books = Object.keys(action.payload).map((key) => ({
        ...action.payload[key][0],
        item_id: key,
      }));
      state.books = books;
    },
    [getBooks.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const { addBookOne, removeBookOne } = bookSlice.actions;
export default bookSlice.reducer;
