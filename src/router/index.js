import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Monitor from '../views/MonitorPage.vue'
import Controls from '../views/ControlsPage.vue'
import Events from '../views/EventsPage.vue'
import Settings from '../views/SettingsPage.vue'

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: Home
    },
    {
        path: '/monitor',
        name: 'MonitorPage',
        component: Monitor
    },
    {
        path: '/controls',
        name: 'ControlsPage',
        component: Controls
    },
    {
        path: '/events',
        name: 'EventsPage',
        component: Events
    },
    {
        path: '/settings',
        name: 'SettingsPage',
        component: Settings
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router