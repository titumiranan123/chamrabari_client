import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home";
import MyCart from "../page/Mycart/MyCart";
import Privateroute from "./Privateroute";
import ErrorPage from "../page/Errorpage/Errorpage";
import Login from "../page/Loginpage/Loginpage";
import SignUp from "../page/SingupPage/SingupPage";
import Forgetpassword from "../page/ForgetPassword/ForgetPassword";
import Dashboardlayout from "../layout/Dashboard/Dashboardlayout";
import Dashboard from "../page/Dashboard/Dashboard";
import Users from "../page/Dashboard/Alluser/Alluser";
import UpdateFrom from "../Dashboard_Component/Productcard.jsx/Updateproductform";
import Myproduct from "../page/Dashboard/MyProduct/Myproduct";
import PaymentForm from "../page/Payment/Paymentform";
import Paymentsuccess from "../page/Payment/Paymentsuccess";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cart',
                element: <Privateroute><MyCart /></Privateroute>
            }, {
                path: "/payment",
                element: <Privateroute><PaymentForm /></Privateroute>
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
    ,
    {
        path: '/singup',
        element: <SignUp />
    },
    {
        path: 'forget_password',
        element: <Forgetpassword />
    },
    {
        path: '/payment/success/:trnId',
        element: <Paymentsuccess />
    },
    {
        path: '/payment/failed',
        element: <div>failed </div>
    },
    {
        path: '/dashboard',
        element: <Dashboardlayout />,
        children: [
            {
                path: '',
                element: <Dashboard />,
            },
            {
                path: 'users',
                element: <Users />,
            },
            {
                path: 'products',
                element: <Myproduct />,
            },
            {
                path: 'products/:id',
                element: <UpdateFrom />,
            }
        ]
    },
])