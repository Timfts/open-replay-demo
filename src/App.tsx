import { Outlet, Link } from "react-router-dom"
import { useEffect } from 'react';
import tracker from "./configs/OpenReplay";

tracker.start({
    userID: "userTest", metadata: {
        balance: "10M",
        plan: "free"
    }
}).then(() => {
    window.addEventListener("error", (err) => {
        console.log("lala")
        console.error(err.error);
        tracker.handleError(err)
    })
});


function Root() {

    return (<div>
        <nav>
            <Link to="/a" >page 1</Link>
            <Link to="/b" >page 2</Link>
        </nav>
        <Outlet />
    </div>)
}

export default Root