import { createRouter, createWebHistory } from 'vue-router'

import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Note from "../pages/Note.vue";
import RequestAccess from "@/pages/RequestAccess.vue";
import NewNote from "@/pages/NewNote.vue";
import {useStore} from "vuex";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Login
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
        component: Note,
        meta: { requiresAuth: true }
    },
    {
        path: '/pwd',
        name: 'pwd',
        component: RequestAccess,
        meta: { requiresAuth: true }
    },
    {
        path: '/newnote',
        name: 'new note',
        component: NewNote,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

function isLoggedIn() {
    // Replace this with your logic to check if the user is logged in
    const token = localStorage.getItem('token');
    return !!token;
}

// Add a global beforeEach guard
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !isLoggedIn())  next({ name: 'Login' })
    else next()
})

export default router
