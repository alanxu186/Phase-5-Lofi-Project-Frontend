// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     currentUser: null,
//     loading: false,
//     error:false
// };

// export const postSlice = createSlice({
//     name: "post",
//     initialState,
//     reducers: {
//         loginStart: (state) => {
//             state.loading = true;
//         },
//         loginSuccess: (state, action) => {
//             state.loading = false;
//             state.currentUser = action.payload;
//         },
//         loginFailure: (state) => {
//             state.loading = false;
//         },
//         logout: (state) => {
//             state.currentUser = null;
//             state.loading = false;
//             state.error = false;
//         }
//     }
// })

// export const {loginStart, loginSuccess, loginFailure, logout} = postSlice.actions;

// export default postSlice.reducer;