import logo from '../../assets/photo_raghav.jpg';

import './Header.css';

const Header = () => {
    return (
        <header className='flex profileCard'>
            <div>
                <h1 className='profileCard__name'>Raghav Saxena</h1>
                <h2 className='profileCard__title'>Frontend Developer</h2>
            </div>
            <img className='profileCard__profilePic' src={logo} alt="angle brackets"/>
        </header>
    );
};

export default Header;