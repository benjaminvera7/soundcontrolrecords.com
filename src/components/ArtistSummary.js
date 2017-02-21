import React from 'react';
import {Link} from 'react-router'

const ArtistSummary = ({artists}) => {
    return (
        <div>
            {artists.map((artist, index) => {
                return (
                    <Link to={artist.path}>
                        <div style={
                            {
                                backgroundImage: 'url(' + artist.header + ')',
                                'background-position': '50% 65%'
                            }
                        }
                             className='artist-header col-lg-12 col-md-12 img-responsive' role="presentation"
                             key={index}>
                            <h1>{artist.name}</h1>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
};

export default ArtistSummary;