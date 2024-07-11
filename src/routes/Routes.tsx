import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/homePage/HomePage";
import ToursPage from "../pages/toursPage/ToursPage";
import AboutPage from "../pages/aboutPage/AboutPage";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <HomePage />
			},
			{
				path: "/tours",
				element: <ToursPage />
			},
			{
				path: "/about",
				element: <AboutPage />
			},
			{
				path: "/login",
				element: <LoginPage />
			},
			{
				path: "/register",
				element: <RegisterPage />
			}
		]
	}
]) 