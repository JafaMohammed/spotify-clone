export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //removed after finished developing"
    token: "BQBHmFTC_R0y3ba2wGkoXWjoiqC8yxdnt1Xy5vlXsusHTvZlgZs9CGOaG6Dgo8yCinkKQOF4QhuqwQ4qOkE6ad1gNQzJpuf5qm34jUHnVijtpADi9ENzxDMBsGbF2_rihM_yptY6QF4m0VXXor2Iu80_2llOCt3KGl0"
}

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer;