import MusicList from './MusicList';
import './styles/MainSection.css';
import React, { Component } from 'react';
import ButtonsPage from './ButtonsPage';

export class MainSection extends Component {
    render() {
        const {musicListState, pageIndex, handleIndexPage} = this.props;
        return (
            <section className="mainContent">
                <span className="resultsAmount">{musicListState.length !== 0 && `Founds ${musicListState.length} songs`}</span>
                <MusicList 
                    musicListState = {musicListState} 
                    pageIndex = {pageIndex}/>
                {musicListState.length > 9 && 
                <ButtonsPage 
                    musicListStateLength = { musicListState.length}
                    pageIndex = {pageIndex}
                    handleIndexPage = {handleIndexPage}/>}
            </section> 
        );
    }
}

export default MainSection;