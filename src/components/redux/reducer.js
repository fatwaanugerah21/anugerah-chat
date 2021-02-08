const appStore = (state = {}, action) => {
  switch (action.type) {
    case "ACTIVE_CONTACT":
      state = { ...state, activeContact: action.id };
      return state;
    default:
      return state;
  }
};
export default appStore;
