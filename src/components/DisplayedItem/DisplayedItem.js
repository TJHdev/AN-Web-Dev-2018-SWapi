import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    data: state.requestData.data,
    itemSelected: state.requestData.itemSelected
  }
}

class DisplayedItem extends Component {

  render() {
    let itemToDisplay;
    if(this.props.data.results) {
      itemToDisplay = this.props.data.results[this.props.itemSelected];
      console.log(itemToDisplay);
      console.log()

      return (
        <div>
          {Object.entries(itemToDisplay)}
        </div>
      );
    }

    return (
      <div>
        Select a category
      </div>
    )
    
    
    

    
  }
}

export default connect(mapStateToProps)(DisplayedItem);