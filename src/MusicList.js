import React from 'react';
import MusicCard from './MusicCard';
import './styles/MusicList.css';

const MusicList = props => {
    const {pageIndex, musicListState} = props;
    const musicElementsList = musicListState
        .slice(pageIndex, pageIndex+9)
        .map(item => <MusicCard key={item.id} music={item}/>)
    return (
        <div className="musicList">
            {musicElementsList}
            {musicListState.length === 0 && "Sorry, no matches found"}
        </div>
    );
}
 
export default MusicList;