const getters = {
  getToken: state => {
    return state.token;
  },
  getAuthUser: state => {
    return state.authUser;
  }
};

export default getters;