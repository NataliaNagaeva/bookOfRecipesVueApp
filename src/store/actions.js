const actions = {
  registration({commit}, userData) {
    return firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password);
  },
  logIn({commit}, userData) {
    return firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
      .then( (response) => {
        //token скорее всего нужно пихать в localstorage
        commit('setToken', response.user.uid);
      });
  }
};

export default actions;