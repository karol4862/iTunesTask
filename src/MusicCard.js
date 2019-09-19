import React from 'react';

const MusicCard = props => {
    const {thumbnail, track, artist} = props.music;
    return (
        <div className="musicCard">
            <img src={thumbnail} alt={track}/>
            <section className="contentBox">
                <h3>{track}</h3>
                <p>By {artist}</p>
            </section>
            
        </div>
    );
}
 
export default MusicCard;