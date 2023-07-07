import { DAT_GHE, HUY_GHE } from "../types/bookingTypes";

const initialState = {
  listGheDangDat: [
  ],
};
export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let listNewGheDangDat = [...state.listGheDangDat]
      let index = listNewGheDangDat.findIndex((gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe);
      if(index !== -1){
        listNewGheDangDat.splice(index, 1)
      }else{
        listNewGheDangDat.push(action.ghe)
      }
      return{
        ...state,
      listGheDangDat: listNewGheDangDat
      }
    }
    case HUY_GHE: {
      let listNewGheDangDat = [...state.listGheDangDat]
      let index = listNewGheDangDat.findIndex((gheDangDat) => gheDangDat.soGhe === action.soGhe);
      if(index !== -1){
        listNewGheDangDat.splice(index, 1)
      }else{
        listNewGheDangDat.push(action.ghe)
      }
      return{
        ...state,
      listGheDangDat: listNewGheDangDat
      }
    }
    
    default:
      return state;

  }
};
