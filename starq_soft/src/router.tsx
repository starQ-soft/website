import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import RootLayout from './layouts/RootLayout';
// import GamesLayout from './layouts/GamesLayout';
// import LSCPage from './pages/games/LSCPage';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';

const router = createBrowserRouter([
    {}
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <NotFound />,
//     children: [
//       { index: true, element: <Home /> },
//       {
//         path: "games",
//         element: <GamesLayout />,
//         children: [
//           {
//             path: "lsc",
//             element: <LSCPage />,
//           },
//         ],
//       },
//     ],
//   },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}