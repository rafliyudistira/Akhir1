import LoginViews from "./pages/LoginViews.vue"
import HomeViews from "./pages/HomeViews.vue"
import RegisterViews from "./pages/RegisterViews.vue"
import AddkkViews from "./pages/AddkkViews.vue"
import DetailkkViews from "./pages/DetailkkViews.vue"
import AnggotaViews from "./pages/AnggotaViews.vue"
import AddakViews from "./pages/AddakViews.vue"

export default[
    {
        path : "/",
        component : LoginViews,
    },
    {
        path : "/Register",
        component : RegisterViews,
    },
    {
        path : "/Home",
        component : HomeViews,
    },
    {
        path : "/Addkk",
        component : AddkkViews,
    },
    {
        path : "/detailKK/:id",
        name : "detailKK",
        component : DetailkkViews,
    },
    {
        path : "/listanggota/:id",
        name : "listanggota",
        component : AnggotaViews
    },
    {
        path : "/tambahanggota",
        name : "tambahanggota",
        component : AddakViews
    },
    {
        path : "/detailAK/:id",
        name : "detailAK",
        component : AddakViews
    }
]