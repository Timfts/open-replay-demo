import { Outlet, Link } from "react-router-dom"


function Root() {

    return (<div>
        <nav>
            <Link to="/open-replay-demo/a" >page 1</Link>
            <Link to="/open-replay-demo/b" >page 2</Link>
        </nav>
        <Outlet />
    </div>)
}

export default Root