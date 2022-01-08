import {
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
} from "./actions";

const initialState = {
    categories: [],
    currentCategory: ''
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        // if action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };

        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };
    }
}

export default reducers;