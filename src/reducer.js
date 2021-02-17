export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //removed after finished developing"
    //  token: "BQBHmFTC_R0y3ba2wGkoXWjoiqC8yxdnt1Xy5vlXsusHTvZlgZs9CGOaG6Dgo8yCinkKQOF4QhuqwQ4qOkE6ad1gNQzJpuf5qm34jUHnVijtpADi9ENzxDMBsGbF2_rihM_yptY6QF4m0VXXor2Iu80_2llOCt3KGl0"
}

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
};

export default reducer;