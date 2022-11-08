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