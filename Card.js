import { useState } from 'react';

function Card({ id, name, info, image, price, removeTourHandler }) {

   const [readmore, setReadmore] = useState(false);

   function readmoreHandler() {
      setReadmore(!readmore);

   }
  
   const description = readmore ? info : `${info.substring(0, 200)}.... `;

   return (

      <div className="Card">
         <img src={image} className="image"></img>

         <div className="tour-info">
            <div className='tour-details'>
               <h4 className='tour-price'>₹ {price}</h4>
               <h4 className='tour-name'>{name}</h4>
            </div>

            <div className='description'>
               {description}
               <span onClick={readmoreHandler} className='read-more'>
                  {readmore ? ` Show less` : `Read more`}
               </span>
            </div>
         </div>
         <button className="btn-red" onClick={() => removeTourHandler(id)}>
            Not Intrested
         </button>
      </div>

   );
}

export default Card;