import React from 'react';
import './Room.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faRestroom } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';


const Room = ({room}) => {
   const history = useHistory();
   const bookHandler = (bedType) => {
       history.push(`/book/${bedType}`);
   }
   
    return (
        <div className="col-lg-4 col-md-4 cl-12 mt-3">
          <div className="card">
          <div className="ts card-header px-2 bg-white">
                   <div className="text-left align-items-center d-flex">
                   <div className="logo font-weight-bold d-flex align-items-center justify-content-center text-white">
                   {room.avatar} 
                    </div>
                    <span className="ml-3 font-weight-bold">{room.title}</span>
                   </div>
                   </div>
              <div className="card-body p-0">
                    <img src={room.imgURL} className="img-fluid" alt=""/>
              </div>
              <div className="card-footer bg-white">
              <div className="bx d-lg-flex d-md-flex d-block mt-3">
                  
                      <div className="ml-2">
                      <span className="items font-weight-bold items1 px-2"><FontAwesomeIcon icon={faBed} className="mr-1" />{room.bed}</span>
                        <span className="items font-weight-bold items2 px-2"> <FontAwesomeIcon icon={faRestroom} className="mr-2"/>{room.capacity}</span>
                        <span className="items items3 px-2 font-weight-bold"><span className="font-weight-bold">$ :</span> {room.price}</span>
                      </div>
                        <button className="btn ml-auto bt text-white" onClick={() => bookHandler(room.bedType)}>BOOK</button>
                    </div>
              </div>
          </div>
        </div>
    );
};

export default Room;