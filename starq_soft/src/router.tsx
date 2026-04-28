// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Lsc from './pages/Lsc';
// import App from './App';
// import { translations } from './pages/translations';

// // import RootLayout from './layouts/RootLayout';
// // import GamesLayout from './layouts/GamesLayout';
// // import LSCPage from './pages/games/LSCPage';
// // import Home from './pages/Home';
// // import NotFound from './pages/NotFound';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     // element: <App />,
//     // errorElement: <NotFound />,
//     children: [
//       // { index: true, element: <Home /> },
//       {
//         path: "lsc",
//         element: <Lsc t={translations['zh-cn']} />,
//         // children: [
//         //   {
//         //     path: "lsc",
//         //     element: <Page />,
//         //   },
//         // ],
//       },
//     ],
//   },
// ]);

// export default function AppRouter() {
//   return <RouterProvider router={router} />;
// }


"use client"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Lsc from "./pages/Lsc"
import AIGirlfriend from "./pages/test"

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/love-startup-cofounder" element={<Lsc />} />
       {/* <Route path="/love-startup-cofounder" element={< AIGirlfriend />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter >
  )
}

export default AppRouter
