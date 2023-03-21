import { createRouter, createWebHistory } from 'vue-router'

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Note from "../pages/Note.vue";
import RequestAccess from "@/pages/RequestAccess.vue";
import NewNote from "@/pages/NewNote.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/note',
        name: 'Note',
        component: Note
    },
    {
        path: '/pwd',
        name: 'pwd',
        component: RequestAccess
    },
    {
        path: '/newnote',
        name: 'new note',
        component: NewNote
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
