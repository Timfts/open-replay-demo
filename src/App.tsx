import { Outlet, Link } from "react-router-dom"
import { useEffect } from 'react';
import OpenReplay from '@openreplay/tracker';
import trackerAssist from '@openreplay/tracker-assist';


const tracker = new OpenReplay({
    projectKey: "PyR18rN6EOFXo49pSxkk"
});

tracker.use(trackerAssist());

function Root() {

    useEffect(() => {
        tracker.start();
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