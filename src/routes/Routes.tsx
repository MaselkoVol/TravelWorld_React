import React from "react";

import { createBrowserRouter, createHashRouter } from "react-router-dom";
import App from "../App";
import SplashScreen from "../pages/splashScreen/SplashScreen";
import ErrorPage from "../pages/errorPage/ErrorPage";
const LazyRegisterPage = React.lazy(() => import("../pages/registerPage/RegisterPage"));
const LazyLoginPage = React.lazy(() => import("../pages/loginPage/LoginPage"))
const LazyHomePage = React.lazy(() => import("../pages/homePage/HomePage"));
const LazyAboutPage = React.lazy(() => import("../pages/aboutPage/AboutPage"));
const LazyGalleryPage = React.lazy(() => import("../pages/galleryPage/GalleryPage"))

export const router = createHashRouter([
	{
		path: "",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "",
				element: <React.Suspense fallback={<SplashScreen />}><LazyHomePage /></React.Suspense>
			},
			{
				path: "about",
				element: <React.Suspense fallback={<SplashScreen />}><LazyAboutPage /></React.Suspense>
			},
			{
				path: "gallery",
				element: <React.Suspense fallback={<SplashScreen />}><LazyGalleryPage /></React.Suspense>
			},
			{
				path: "login",
				element: <React.Suspense fallback={<SplashScreen />}><LazyLoginPage /></React.Suspense>
			},
			{
				path: "register",
				element: <React.Suspense fallback={<SplashScreen />}><LazyRegisterPage /></React.Suspense>
			}
		]
	}
]) 