import { createBrowserRouter } from "react-router-dom";
import Root from "./App"
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";


export default createBrowserRouter([
    {
        path: "/open-replay-demo/",
        element: <Root />,
        children: [
            {
                path: "a/",
                element: <PageA />
            },
            {
                path: "b/",
                element: <PageB />
            }
        ]
    },
]);