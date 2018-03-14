import React from 'react';
import ShipCard from './ShipCard';

const ShipList = ({filteredShips}) => {
    return (            
        <div>
            {   
                filteredShips.map((ship, i) => {
                    return (
                        <div className='fl pt3'>
                        <ShipCard
                            key = {i}
                            shipName = {filteredShips[i].name}
                            imageURL = {filteredShips[i].media[0].images.store_small}
                            pageURL= {filteredShips[i].url}
                            manufacturer = {filteredShips[i].manufacturer}
                            description = {filteredShips[i].description}
                        />
                        <div class="fog-low">
    						<img src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png" alt=""/>
    					</div>
                        </div>
                    );
                })    
            }
                        
        </div>
    );  
}

export default ShipList;