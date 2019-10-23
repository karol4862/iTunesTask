import React from 'react';
import SearchSection from './SearchSection';
import logo from './img/pgssoftware.png';
import './styles/HeaderSection.css';

const HeaderSection = props => {
    return (
        <header className="header">
            <SearchSection addMusicToState = {props.addMusicToState}/>
        </header>
    );
}
 
export default HeaderSection;
