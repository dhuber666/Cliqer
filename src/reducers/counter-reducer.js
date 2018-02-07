
export default function (state = {}, action) {

    console.log(state);
    switch (action.type) {

        case 'FETCH_VALUES':

            return action.payload;


        default:
            return state;
    }
}