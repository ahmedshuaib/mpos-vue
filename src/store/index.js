
import { createStore } from 'vuex'
import authStore from "@/store/modules/authStore";


export default createStore({
    modules: {
        authStore,
    }
})
