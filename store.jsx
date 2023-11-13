// /* eslint-disable no-unused-vars */
// import { create } from "zustand";
// import Api from "./src/api";
// import axios from "axios";

// const apiURL = import.meta.env.VITE_GAMING_URL;
// const apiKey = import.meta.env.VITE_GAMING_KEY;
// const apiID = import.meta.env.VITE_GAMING_ID;
// const apiSign = import.meta.env.VITE_GAMING_SIGN;

// const useStore = create((set) => ({
//   getListGame: [],
//   fetchListGame: async () => {
//     try {
//       const req = {
//         key: apiKey,
//         sign: apiSign,
//         type: "services",
//       };
//       const res = await axios.post(`${apiURL}/game-feature`+req);
//       set({ getListGame: res.data.data });
//     } catch (error) {
//       console.log(error);
//     }
//   },
// }));


// export default useStore;