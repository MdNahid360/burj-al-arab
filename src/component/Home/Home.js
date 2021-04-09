import React from 'react';
import Room from '../Room/Room';

const Home = () => {

    const rooms = [
        {  
            title: 'Standard Single Room',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgURL: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-presidential-suite-living-room-4-hero.jpg',
            bed:1,
            capacity: 1,
            bedType: 'Single',
            avatar: 'A',
            price: 466
        },
        {  
            title: 'Couple Power Room',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgURL: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-royal-suite-staircase-5-hero.jpg',
            bed:1,
            capacity: 2,
            bedType: 'Double',
            avatar: 'M',
            price: 466
        },
        {  
            title: 'Family Capacity Room',
            description: 'Have lots of in-room facilities and are designed in open-concept living area.Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgURL: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/presidential-two-bedroom-suite/burj-al-arab-presidential-suite-guest-bedroom_6-4_landscape/burj-al-arab-presidential-suite-guest-bedroom_16-9_landscape.jpg?w=2080',
            bed:4,
            capacity: 5,
            bedType: 'Family',
            avatar: 'A',
            price: 466
        },
        {  
            title: 'Standard Single Room',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgURL: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-presidential-suite-living-room-4-hero.jpg',
            bed:1,
            capacity: 1,
            bedType: 'Single',
            avatar: 'A',
            price: 466
        },
        {  
            title: 'Couple Power Room',
            description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgURL: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-royal-suite-staircase-5-hero.jpg',
            bed:1,
            capacity: 2,
            bedType: 'Double',
            avatar: 'M',
            price: 466
        },
        {  
            title: 'Family Capacity Room',
            description: 'Have lots of in-room facilities and are designed in open-concept living area.Standard Single Rooms are designed in open -concept living area and have many facilities.',
            imgURL: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/presidential-two-bedroom-suite/burj-al-arab-presidential-suite-guest-bedroom_6-4_landscape/burj-al-arab-presidential-suite-guest-bedroom_16-9_landscape.jpg?w=2080',
            bed:4,
            capacity: 5,
            bedType: 'Family',
            avatar: 'A',
            price: 466
        }
    ]


    return (
        <div className="row container m-auto mt-5 py-5">
               {
                rooms.map(room => <Room room={room} key={room.bedType} />)
            }
        </div>
    );
};

export default Home;