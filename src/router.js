import { createRouter, createWebHashHistory } from "vue-router";
import AuthPage from "./components/AuthPage.vue";
import AnaliticPage from "./components/AnaliticPage.vue";

const router = createRouter({
          history: createWebHashHistory(),
          routes: [
                    {
                              path: '/',
                              component: AuthPage
                    },
                    {
                              path: '/altc',
                              component: AnaliticPage
                    },
          ]
})

export default router;



