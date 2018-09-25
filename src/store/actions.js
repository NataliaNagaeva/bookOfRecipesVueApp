const actions = {
  registration({commit}, userData) {
    return firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)    
            .catch( (error) => {
              let errorCode = error.code;
              let errorMessage = error.message;
              console.log(errorCode,' ', errorMessage);
            });
  },
  signIn({commit}, userData) {
    return firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
            .then( (response) => {
              //на случай, если юзера нужно будет помещать в LocalStorage, сериализуем данные
              let serialObj = JSON.stringify(response.user);
              commit('setAuthUser', serialObj);
              commit('setToken', response.user.uid);
            })
            .catch( (error) => {
              let errorCode = error.code;
              let errorMessage = error.message;
              console.log(errorCode,' ', errorMessage);
            });
  },
  signOut({commit}) {
    return firebase.auth().signOut()
            .then( () => {
              //TODO возможно не совсем верно
              commit('setAuthUser', null);
              commit('setToken', null);
              localStorage.removeItem('token');
            }).catch(function(error) {
              let errorCode = error.code;
              let errorMessage = error.message;
              console.log(errorCode,' ', errorMessage);
            });
  },
  getAuthUser({commit}) {
    let authUser = firebase.auth().currentUser;
    let serialObj = JSON.stringify(authUser);
    console.log(authUser);
    commit('setAuthUser', serialObj);
    return authUser;
  }
};

export default actions;