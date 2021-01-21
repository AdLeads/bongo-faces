import PostJob from "./components/jobs/PostJob"
import CardList from "./components/CardList.vue"
import PageNotFound from "./components/PageNotFound"
export const routes = [{
        path: '/new-job',
        component: PostJob
    },
    {
        path: '/',
        component: CardList
    },
    {
        path: "*",
        name: "PageNotFound",
        component: PageNotFound,
    },
]