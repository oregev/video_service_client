import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { trendsReducer } from "views/trends/trendsSlice";
import { searchReducer } from "components/header/search/searchSlice";
import { videoReducer } from "views/player/playerSlice";
import { favoritesReducer } from "views/favorites/favoritesSlice";

const rootReducer = combineReducers({
	trends: trendsReducer,
	searchResults: searchReducer,
	video: videoReducer,
	favorites: favoritesReducer,
});

const initialState = {
	trends: [],
	searchResults: [],
	video: [],
	favorites: [],
};

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
