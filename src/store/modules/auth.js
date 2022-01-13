/*
    module for auth store
    made use of local storage for persisting data 
*/

const state = {
    currentUser: localStorage.getItem('user') || null,
}

const getters = {
    getCurrentUser: (state) => {
        return state.currentUser;
    },
    loggedIn: (state) => {
        return state.currentUser !== null;
    }
}

const mutations = {
    setCurrentUser: (state, credentials) => {
        state.currentUser = credentials;
    },
    logout: (state) => {
        state.loggedIn = false;
        state.currentUser = null;
    },
}

const actions = {
    // login and set current username to localstorage
    setCurrentUser(context, user) {
        localStorage.setItem('user', user);
        context.commit("setCurrentUser", user)
    },

    // logout logic
    logout(context) {
        // remove user from local storage
        localStorage.removeItem("user");
        // set current user to null
        context.commit('logout')
    }
}

export default {
    state, getters, actions, mutations
}