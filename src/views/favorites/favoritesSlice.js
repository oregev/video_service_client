import axios from "axios";
import { setFavorites } from "views/trends/trendsSlice";
import { store } from "redux/store";
import { serverURL } from "assets/urls/urls";

const GET_FAVORITES_DATA = "GET_FAVORITS_DATA";
const FAVORITES_REQUEST_SUCCESS = "FAVORITES_REQUEST_SUCCESS";
const FAVORITES_REQUEST_FAIL = "FAVORITES_REQUEST_FAIL";
const UPDATE_FAVORITES_DATA = "UPDATE_FAVORITES_DATA";
const UPDATE_TRENDS_DATA = "UPDATE_TRENDS_DATA";

export const favoritesReducer = (state = [], action) => {
	switch (action.type) {
		case GET_FAVORITES_DATA:
			return {
				...state,
				loading: true,
			};
		case FAVORITES_REQUEST_SUCCESS:
			return {
				...state,
				loading: false,
				favorites: action.payload,
			};
		case FAVORITES_REQUEST_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case UPDATE_FAVORITES_DATA:
			return {
				...state,
				loading: false,
				favorites: action.payload,
			};
		default:
			return state;
	}
};

export const updateFavorites = (payload) => ({
	type: UPDATE_FAVORITES_DATA,
	payload,
});

export const getFavoritesData = () => async (dispatch) => {
	try {
		dispatch({
			type: GET_FAVORITES_DATA,
			payload: "",
		});

		const { data } = await axios.get(`${serverURL}`);
		dispatch({
			type: FAVORITES_REQUEST_SUCCESS,
			payload: { videos: data, token: "" },
		});
	} catch (err) {
		dispatch({
			type: FAVORITES_REQUEST_FAIL,
			payload: err.response,
		});
	}
};

export const saveVideo = (video) => async (dispatch) => {
	try {
		await axios.put(`${serverURL}${video.id}`, video);

		dispatch({
			type: UPDATE_FAVORITES_DATA,
			payload: "",
		});
	} catch (err) {
		dispatch({
			type: FAVORITES_REQUEST_FAIL,
			payload: err.response,
		});
	}
};

export const removeVideo = (id) => async (dispatch) => {
	const state = store.getState();
	const favorites = state.favorites.favorites.videos;
	const trends = state.trends.trends.videos;

	try {
		await axios.delete(`${serverURL}${id}`);

		const remainingFavorits = favorites.filter((video) => video.id !== id);
		dispatch({
			type: UPDATE_FAVORITES_DATA,
			payload: { videos: remainingFavorits, token: "" },
		});

		const formatedTrends = setFavorites(trends);
		dispatch({
			type: UPDATE_TRENDS_DATA,
			payload: { videos: formatedTrends, token: "" },
		});
	} catch (err) {
		dispatch({
			type: FAVORITES_REQUEST_FAIL,
			payload: err.response,
		});
	}
};
