import Tanks from "../api/Tank";

export const FETCH_ALL_TANKS = "FETCH_ALL_TANKS";

export const fetchAllTanks = () => async dispatch => {
  const response = await Tanks.get();
  console.log("response", response.data);
  dispatch({ type: FETCH_ALL_TANKS, payload: response.data });
};
