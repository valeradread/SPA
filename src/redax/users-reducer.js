const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Simon',
            status: 'I sell cars',
            location: {country: 'USA', city: 'Los-Santos'}
        },
        {
            id: 2,
            followed: false,
            fullName: 'Sergio',
            status: 'I hate teleports',
            location: {country: 'Ukraine', city: 'Kyiv'}
        },
        {
            id: 3,
            followed: true,
            fullName: 'McLovin',
            status: 'Im cool!',
            location: {country: 'USA', city: 'California'}
        },
        {id: 4, followed: false, fullName: 'Vitya', status: 'Money))', location: {country: 'Ukraine', city: 'Kyiv'}},
        {
            id: 5,
            followed: true,
            fullName: 'Zub',
            status: 'Phonkmaker and heartbreaker',
            location: {country: 'Ukraine', city: 'Kyiv'}
        },
        {
            id: 6,
            followed: false,
            fullName: 'Valera',
            status: 'Rockstar',
            location: {country: 'Ukraine', city: 'Mykolaiv'}
        },
    ]
};

const usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return{
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId });
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;