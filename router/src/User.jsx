import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
const User = ({user}) => {
    const {name, id, email} = user;
    // console.log(name);
    const navigate = useNavigate();
    const handleHandle = () => {
        navigate(`/myhomesss/${id}`);
    }
    return (
        <div className="border-2">
            <p>{name}</p>
            <p>{id}</p>
            <p>{email}</p>
            <Link to={`/myhomesss/${id}`}><button>show more</button></Link>
            <button onClick={handleHandle}>click</button>
        </div>

    );
};

User.propTypes = {
    user: PropTypes.object
};
export default User;