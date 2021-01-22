import Vue from "vue"
import Vuex from "vuex"
import newJob from "./modules/newJob"

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        newJob
    }
})