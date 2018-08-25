import React from 'react';

// props
// state
// children

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '5px solid', height: '800px'}}>
      {props.children}
    </div>
  )
}

export default Scroll;