import { Outlet } from "react-router-dom";
import Header from "./Header";

const Show = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Show;