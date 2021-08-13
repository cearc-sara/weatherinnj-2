import axios from "axios";
import options from "../components/api"
import moment from "moment";

export const AWAITING_TEMPS = "AWAITING_TEMPS";
export const TEMPS_SUCCESS = "TEMPS_SUCCESS";
export const TEMPS_FAIL = "TEMPS_FAIL";

export const getTemps = () => async dispatch => {
    try {
        dispatch({
            type: "AWAITING_TEMPS"
        })

        const response = await axios.request(options);

        const labels = [];
        const data = [];
        for (let i = 0; i < response.data.list.length; i++) {
            data.push(response.data.list[i].main.temp)
            labels.push(moment(response.data.list[i].dt_txt).format("LT"))


        }
        dispatch({
            type: TEMPS_SUCCESS,
            payload: {
                data,
                labels
            }
        })
    } catch (e) {
        dispatch({
            type: TEMPS_FAIL
        })

    }
}