import { useLoaderData } from "react-router-dom";

import { Link } from "react-router-dom";
const UserDetails = () => {
    const userDetails = useLoaderData();
    const {name} = userDetails;
    // console.log(userDetails);
    return (
        <div>
            <div>hi hello :{name}</div>
            <Link to="/">Home</Link>
        </div>
    );
};

export default UserDetails;