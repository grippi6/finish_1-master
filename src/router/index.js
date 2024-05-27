import { createWebHistory, createRouter } from "vue-router";
import AboutUs from "@/pages/AboutUs.vue";
import ContactMe from "@/pages/ContactMe.vue"
import MainPage from "@/pages/MainPage.vue";
import LoginMe from "@/components/LoginMe.vue";
import BasketPizza from "@/pages/BasketPizza.vue";

const routes = [
    {
        path: "/contacts",
        name: "ContactMe",
        component: ContactMe,
    },
    {
        path: "/login",
        name: "LoginMe",
        component: LoginMe,
    },
    {
        path: "/about",
        name: "AboutUS",
        component: AboutUs,
    },
    {
        path: "/",
        name: "MainPage",
        component: MainPage,
    },
    {
        path: "/basket",
        name: "BasketPizza",
        component: BasketPizza,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;