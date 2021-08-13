import { AWAITING_TEMPS, TEMPS_SUCCESS, TEMPS_FAIL } from "../actions/action";

export const initialState = {
    loading: false,
    errorMessage: "",
    data: {
        labels: [],
        datasets: [{
            label: "Temperatures",
            data: [],
            backgroundColor: "rgba(20, 186, 252, 1)",
            borderColor: "rgba(52, 143, 179, 1)",
            pointBorderColor: "rgba(25, 99, 129, 1)"
        }]
    }
};

const tempReducer = (state = initialState, action) => {
    switch (action.type) {
        case AWAITING_TEMPS:
            return {
                ...state,
                loading: true
            }
        case TEMPS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: {
                    labels: action.payload.labels,
                    datasets: [{
                        label: "Temperatures",
                        data: action.payload.data,
                        backgroundColor: "rgba(20, 186, 252, 1)",
                        borderColor: "rgba(52, 143, 179, 1)",
                        pointBorderColor: "rgba(25, 99, 129, 1)"
                    }]
                }
            }
        case TEMPS_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.message
            }
        default:
            return state;
    }
}

export default tempReducer;