import Home from "~/pages/Home"
import Login from "~/pages/Login"
import  SignUp from "~/pages/SignUp"
import Overview from "~/pages/Overview"
import Class from "~/pages/Class"
import Schedule from "~/pages/Schedule"
import Defaultlayout from "~/layouts/DefaultLayout"
import LoginRole from "~/pages/Login/LoginRole"
import SignUpRole from "~/pages/SignUp/SignUpRole"

const router = {
    loginStudent: "/login/student",
    loginTeacher: "/login/teacher",
    login: "/login",
    signUpForm: "/signup/form",
    signUp: "/signup",
    overview: "/overview",
    class: "/class",
    schedule: "/schedule",
    home: "/",
    
}


const routes = [
    {path: router.home, page: Home, layout: Defaultlayout},
    {path: router.login, page: Login, layout: Defaultlayout},
    {path: router.loginStudent, page: LoginRole, layout: Defaultlayout},
    {path: router.loginTeacher, page: LoginRole, layout: Defaultlayout},
    {path: router.signUp, page: SignUp, layout: Defaultlayout},
    {path: router.signUpForm, page: SignUpRole, layout: Defaultlayout},
    {path: router.overview, page: Overview, layout: Defaultlayout},
    {path: router.class, page: Class, layout: Defaultlayout},
    {path: router.schedule, page: Schedule, layout: Defaultlayout},
]

export default routes;
