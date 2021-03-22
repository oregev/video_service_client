import axios from "axios";
import { store } from "redux/store";
import { serverURL } from "assets/urls/urls";

const GET_TRENDS_DATA = "GET_TRENDS_DATA";
const TRENDS_REQUEST_SUCCESS = "TRENDS_REQUEST_SUCCESS";
const TRENDS_REQUEST_FAIL = "TRENDS_REQUEST_FAIL";
const UPDATE_TRENDS_DATA = "UPDATE_TRENDS_DATA";

export const trendsReducer = (state = [], action) => {
	switch (action.type) {
		case GET_TRENDS_DATA:
			return {
				...state,
				loading: true,
			};
		case TRENDS_REQUEST_SUCCESS:
			return {
				...state,
				loading: false,
				trends: action.payload,
			};
		case TRENDS_REQUEST_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case UPDATE_TRENDS_DATA:
			return {
				...state,
				loading: false,
				trends: action.payload,
			};
		default:
			return state;
	}
};

export const updateTrends = (payload) => ({
	type: UPDATE_TRENDS_DATA,
	payload,
});

const isFavorite = (video, favorites) => favorites.some((fav) => fav.id === video.id);

export const setFavorites = (videos) => {
	const state = store.getState();
	const favorites = state.favorites.favorites.videos;
	return videos.map((video) => {
		return { ...video, isFavorite: isFavorite(video, favorites) };
	});
};

export const getTrendsData = () => async (dispatch) => {
	try {
		dispatch({
			type: GET_TRENDS_DATA,
			payload: "",
		});

		const { data } = await axios.get(`${serverURL}trend`);
		const { items, nextPageToken } = data;
		const formatedVideos = setFavorites(items);

		dispatch({
			type: TRENDS_REQUEST_SUCCESS,
			payload: { videos: formatedVideos, token: nextPageToken },
		});
	} catch (err) {
		dispatch({
			type: TRENDS_REQUEST_FAIL,
			payload: err.response,
		});
	}
};

export const getNextTrends = (token) => async (dispatch) => {
	const state = store.getState();
	const trends = state.trends.trends;
	try {
		const { data } = await axios.get(`${serverURL}trend?page=${token}`);
		const { items, nextPageToken } = data;
		const formatedVideos = setFavorites(items);

		dispatch({
			type: UPDATE_TRENDS_DATA,
			payload: { videos: [...trends.videos, ...formatedVideos], token: nextPageToken },
		});
	} catch (error) {
		console.log("Error loading more", error);
	}
};
