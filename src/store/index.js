import { createStore } from 'vuex'

const store = createStore({
    state: {
        host: "http://127.0.0.1:8000/api/",
        // host: "http://note.chnnhc.com/api/",
        token: null,
        currentNote: null,
        currentNotePwd: null,
        keyword: null,
        type: null,
    },
    getters: {
        getToken() {
            return localStorage.getItem("token");
        },
        getUsername() {
            return localStorage.getItem("username");
        },
        getCurrentNote(){
            return localStorage.getItem("currentNote")
        },
        getCurrentNotePwd(){
            return localStorage.getItem("currentNotePwd")
        },
        getKeyword() {
            return localStorage.getItem("keyword");
        },
        getType() {
            return localStorage.getItem("type");
        },
    },

    mutations: {
        set_token(state, token) {
            localStorage.setItem("token", token);
        },
        del_token() {
            localStorage.removeItem("token");
        },
        set_username(state, username) {
            localStorage.setItem("username", username);
        },
        del_username() {
            localStorage.removeItem("username");
        },
        set_currentnote(state, noteid) {
            localStorage.setItem("currentNote", noteid);
        },
        del_currentnote(){
            localStorage.removeItem("currentNote");
        },
        set_currentnotepwd(state, pwd) {
            localStorage.setItem("currentNotePwd", pwd);
        },
        del_currentnotepwd(){
            localStorage.removeItem("currentNotePwd");
        },
        set_keyword(state, keyword) {
            localStorage.setItem("keyword", keyword);
        },
        del_keyword() {
            localStorage.removeItem("keyword");
        },
        set_type(state, type) {
            localStorage.setItem("type", type);
        },
        del_type() {
            localStorage.removeItem("type");
        },

    },
    actions: {
        // 定义 store 的 actions
    },
})

export default store