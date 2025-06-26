import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "../App";
import {
  Home,
  SobreNos,
  UseCase,
  Solutions,
  Blog,
  LeiaMais,
  // MaterialRicos,
  SucessCase,
  UpeDestaca,
} from "../pages/index";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/sobre-nos",
          element: <SobreNos />,
        },
        {
          path: "/cases-de-sucesso",
          element: <UseCase />,
        },
        {
          path: "/solucoes",
          element: <Solutions />,
        },
        {
          path: "/conteudos",
          element: <Blog />,
        },
        {
          path: "/upe-destaca",
          element: <UpeDestaca />,
        },
        {
          path: "/agendar-reuniao",
          element: <SucessCase />,
        },
        {
          path: "/leia-mais",
          element: <LeiaMais />,
        },
        // ROTA 404 - deve ser a última!
        {
          path: "*",
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
