const defaultState = {
   notes: [
      {
         id: 1,
         sign: "Default User",
         time: "02/08/2022",
         text: "Hello mother father"
      },
      {
         id: 2,
         sign: "Default User 2",
         time: "02/08/2022",
         text: "Hello mother father"
      }
   ]
}

export const notesReducer = (state = defaultState, action) => {
   switch (action.type) {
      default:
         return state;
   }
}