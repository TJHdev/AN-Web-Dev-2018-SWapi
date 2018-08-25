import React from 'react';
import Card from '../Card';
import './ItemList.css';



const ItemList = ({ robots }) => {
  // if (true) {
  //   throw new Error('NOOOOOO!');
  // }

  return (
    <div className="itemlist">
      {
        robots.map((user, i) => {
          return (
            <Card 
              key={robots[i].id} 
              id={robots[i].id} 
              name={robots[i].name} 
              email={robots[i].email} 
            />
          );
        })
      }
    </div>
  );
}

export default ItemList;