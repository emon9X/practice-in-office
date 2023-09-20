import { useLoaderData } from "react-router-dom";
import User from "./User";


const Home = () => {

    const users = useLoaderData();
    // console.log(users);
    return (
        <div>
            <h2>{users.length}</h2>
            <div className="grid grid-cols-3">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );

};

export default Home;