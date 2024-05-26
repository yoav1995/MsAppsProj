import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	category: '',
	page: 0,
	showModal: false,
	showItemModal: false,
	hits: [],
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		next: (state) => {
			state.page += 1;
		},
		prev: (state) => {
			state.page = state.page === 0 ? 0 : state.page - 1;
		},
		toggleModal: (state) => {
			state.showModal = !state.showModal;
		},
		setHits: (state, { payload }) => {
			state.hits = payload;
		},
		setCategory: (state, { payload }) => {
			state.category = payload;
		},
		toggleItemModal: (state, { payload }) => {
			state.showItemModal = !state.showItemModal;
		},
	},
});

export const { next, prev, toggleModal, setHits, setCategory ,toggleItemModal} =
	appSlice.actions;
export default appSlice.reducer;
