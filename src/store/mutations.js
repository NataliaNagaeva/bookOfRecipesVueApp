const mutations = {
  setToken(state, payload) {
    localStorage.setItem('token', payload);
    state.token = payload;
  }
};

export default mutations;