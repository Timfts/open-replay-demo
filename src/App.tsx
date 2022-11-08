import { Outlet, Link } from "react-router-dom"
import { useEffect } from 'react';
import tracker from "./configs/OpenReplay";



function Root() {

    useEffect(() => {
        tracker.start({
            userID: "userTest", metadata: {
                balance: "10M",
                plan: "free"
            }
        }).then(() => {
            window.addEventListener("error", (err) => {
                console.log("lala")
                console.error(err);
                tracker.handleError(err)
            })
        });

    }, []);

    return (<div>
        <nav>
            <Link to="/open-replay-demo/a" >page 1</Link>
            <Link to="/open-replay-demo/b" >page 2</Link>
        </nav>
        <Outlet />
    </div>)
}

export default Root