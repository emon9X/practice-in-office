import PropTypes from 'prop-types';
const User = ({user}) => {
    const {name, email, username} = {user};
    console.log(name);
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{username}</p>
        </div>

    );
};
User.propTypes = {
    user: PropTypes.object
};
export default User;