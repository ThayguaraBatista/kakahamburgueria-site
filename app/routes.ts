import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";
import { Orders } from "./pages/Orders";
import { Admin } from "./pages/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "sobre", Component: About },
      { path: "contato", Component: Contact },
      { path: "cardapio", Component: Menu },
      { path: "pedidos", Component: Orders },
      { path: "admin", Component: Admin },
    ],
  },
]);