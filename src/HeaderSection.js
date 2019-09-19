import React from 'react';
import SearchSection from './SearchSection';
import logo from './img/pgssoftware.png';
import './styles/HeaderSection.css';

const HeaderSection = props => {
    return (
        <header className="header">
            <div className="brand">
                <img src={logo} alt="PGS Software"/>
            </div>
            <SearchSection addMusicToState = {props.addMusicToState}/>
        </header>
    );
}
 
export default HeaderSection;
