import PostJob from "../views/PostJob"
import CardList from "../views/CardList.vue"
import PageNotFound from "../views/PageNotFound"

export const routes = [{
        path: '/',
        component: CardList
    },
    {
        path: '/new-job',
        component: PostJob
    },

    {
        path: "*",
        name: "PageNotFound",
        component: PageNotFound,
    },
]