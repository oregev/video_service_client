import axios from "axios";
import { serverURL } from "assets/urls/urls";

const GET_VIDEO = "GET_VIDEO";
const VIDEO_REQUEST_SUCCESS = "VIDEO_REQUEST_SUCCESS";
const VIDEO_REQUEST_FAIL = "VIDEO_REQUEST_FAIL";

export const videoReducer = (state = [], action) => {
	switch (action.type) {
		case GET_VIDEO:
			return {
				...state,
				loading: true,
			};
		case VIDEO_REQUEST_SUCCESS:
			return {
				...state,
				loading: false,
				video: action.payload,
			};
		case VIDEO_REQUEST_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const getVideo = (id) => async (dispatch) => {
	try {
		dispatch({
			type: GET_VIDEO,
			payload: "",
		});

		const { data } = await axios.get(`${serverURL}${id}`);

		dispatch({
			type: VIDEO_REQUEST_SUCCESS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: VIDEO_REQUEST_FAIL,
			payload: err.response,
		});
	}
};
