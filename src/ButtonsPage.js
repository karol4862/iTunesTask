import React from 'react';
import './styles/ButtonsPage.css';

const ButtonsPage = props => {
    const {pageIndex, musicListStateLength, handleIndexPage} = props;
    const handleButtonPage = e => {
        if(e.target.name === "prev") {
            handleIndexPage(pageIndex - 9)
        }
        else {
            handleIndexPage(pageIndex + 9)
        }
    }
    const disabledButtonNext = pageIndex + 9 > musicListStateLength;
    const disabledButtonPrev = pageIndex === 0;

    return (
        <div className="buttonsBox">
            <button 
                name="prev" 
                disabled = {disabledButtonPrev} 
                onClick={handleButtonPage}> prev </button>
            <button 
                name="next" 
                disabled = {disabledButtonNext} 
                onClick={handleButtonPage}> next </button>
        </div>
    );
}
 
export default ButtonsPage;