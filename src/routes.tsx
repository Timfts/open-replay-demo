import { createBrowserRouter } from "react-router-dom";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";


export default createBrowserRouter([
    {
        path: "/open-replay-demo/",
        element: <PageA />,
    },
    {
        path: "/open-replay-demo/b",
        element: <PageB />
    }
]);