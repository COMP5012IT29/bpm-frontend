import { createStore } from 'vuex'

const store = createStore({
    state: {
        // host: "http://127.0.0.1:8000/api/",
        host: "http://note.chnnhc.com/api/",
        token: null
    },
    getters: {
        getToken() {

            return localStorage.getItem("token");
        },
        getUsername() {
            return localStorage.getItem("username");
        }
    },

    mutations: {
        set_token(state, token) {
            localStorage.setItem("token", token);
        },
        del_token() {
            localStorage.removeItem("token");
        },
        set_username(state, token) {
            localStorage.setItem("username", token);
        },
        del_username() {
            localStorage.removeItem("username");
        }
    },
    actions: {
        // 定义 store 的 actions
    },
})

export default store