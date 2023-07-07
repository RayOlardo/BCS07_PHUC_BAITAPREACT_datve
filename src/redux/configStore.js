import {configureStore} from '@reduxjs/toolkit';
import { bookingReducer } from './reducer/bookingReducer';

export const store = configureStore({
    // reducer 
    // nhận vô các state muốn lưu trữ
    reducer: {
        hoTen: (state='Phúc', action)=> {
            return state;
        },
        tickets: bookingReducer,
        
    }
})