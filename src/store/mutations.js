const mutations = {
  setToken(state, payload) {
    localStorage.setItem('token', payload);
    state.token = payload;
  },
  setAuthUser(state, payload) {
    // localStorage.setItem('user', payload);
    //приходит JSON, поэтому парсим
    let parsePayload = JSON.parse(payload);
    state.authUser = parsePayload;
  }
};

export default mutations;