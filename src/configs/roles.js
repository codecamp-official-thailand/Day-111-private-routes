// Import all pages components จากใน app ทั้งหมด
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import VIPFeature from '../components/pages/VIPFeature'
import AdminFeature from '../components/pages/AdminFeature'

const components = {
    home: {
        component: Home,
        url: '/'
    },
    about: {
        component: About,
        url: '/about'
    },
    vipFeature: {
        component: VIPFeature,
        url: '/vip'
    },
    adminFeature: {
        component: AdminFeature,
        url: '/admin'
    }
}

const configObject = {
    guest: {
        allowedRoutes: [
            components.home,
            components.about
        ],
        redirect: '/'
    },
    user: {
        allowedRoutes: [
            components.home,
            components.about,
            components.vipFeature
        ],
        redirect: '/vip'
    },
    admin: {
        allowedRoutes: [...Object.values(components)],
        redirect: '/admin'
    }
}

export default configObject