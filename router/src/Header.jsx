import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/myhome">myHome</Link>
                <Link to="/">Home</Link>
                <Link to="/">Home</Link>
            </ul>
        </div>
    );
};

export default Header;