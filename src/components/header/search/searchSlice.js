import axios from "axios";
import { setFavorites } from "views/trends/trendsSlice";
import { serverURL } from "assets/urls/urls";

const SERACH_VIDEOS = "SERACH_VIDEOS";
const SERACH_VIDEOS_SUCCESS = "SERACH_VIDEOS_SUCCESS";
const SERACH_VIDEOS_FAIL = "SERACH_VIDEOS_FAIL";
const UPDATE_TRENDS_DATA = "UPDATE_TRENDS_DATA";

export const searchReducer = (state = [], action) => {
	switch (action.type) {
		case SERACH_VIDEOS:
			return {
				...state,
				loading: true,
			};
		case SERACH_VIDEOS_SUCCESS:
			return {
				...state,
				loading: false,
				searchResults: action.payload,
			};
		case SERACH_VIDEOS_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const searchVideos = (searchParam) => async (dispatch) => {
	try {
		dispatch({
			type: SERACH_VIDEOS,
			payload: "",
		});
		const { data } = await axios.get(`${serverURL}search?name=${searchParam}`);

		const { items, nextPageToken } = data;
		const formatedVideos = setFavorites(items);

		dispatch({
			type: SERACH_VIDEOS_SUCCESS,
			payload: { videos: formatedVideos, token: nextPageToken },
		});
		dispatch({
			type: UPDATE_TRENDS_DATA,
			payload: { videos: formatedVideos, token: nextPageToken },
		});
	} catch (err) {
		dispatch({
			type: SERACH_VIDEOS_FAIL,
			payload: err.response,
		});
	}
};
