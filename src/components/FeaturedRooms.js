import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';


class FeaturedRooms extends Component {
    //assign a context object
    static contextType = RoomContext;
    render() { 
        let {loading, featuredRooms} = this.context;

        featuredRooms = featuredRooms.map(featuredRoom => 
            <Room key={featuredRoom.id} room={featuredRoom}/> 
            )

        return ( 
            <section className="featured-rooms">
            <Title title="featured rooms"/>
            <div className="featured-rooms-center">
                {loading ? <Loading /> : featuredRooms}
            </div>
            </section>
        );
    }
}

export default FeaturedRooms;