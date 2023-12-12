
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Page";
import Shorts from "../pages/Shorts/Page"
// feed pages
import Subscription from "../pages/Feed/Subscription/Page";
import You from "../pages/Feed/You/Page";
import Channel from "../pages/Feed/Channel/Page";
import Page from "../pages/Watch/Page";
import Notfound from "../pages/Notfound/Notfound";
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/shorts",
    element: <Shorts />,
  },
  {
    path: "/feed/subscriptions",
    element: <Subscription />,
  },
  {
    path: "/feed/you",
    element: <You />,
  },
  {
    path: "/feed/channels",
    element: <Channel />,
  },
  {
    path: "/watch",
    element: <Page />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

export default router

