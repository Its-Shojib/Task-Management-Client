import PropTypes from 'prop-types';

const Header = ({ text, bg, count }) => {
    return (
        <div className={`${bg} flex gap-1 h-12 pl-3 rounded-md uppercase txt-white items-center text-white`}>
            {text}
            <div>{count}</div>
        </div>
    )
}
Header.propTypes = {
    text: PropTypes.string,
    bg: PropTypes.string,
    count: PropTypes.number
}
export default Header;