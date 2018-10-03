import React, { Component } from "react";
import { connect } from "react-redux";
import "./DisplayedItem.css";

const mapStateToProps = state => {
  return {
    data: state.requestData.data,
    itemSelected: state.requestData.itemSelected
  };
};

class DisplayedItem extends Component {
  render() {
    let itemToDisplay;
    if (this.props.data.results) {
      itemToDisplay = this.props.data.results[this.props.itemSelected];
      console.log(itemToDisplay);

      return (
        <table className="displayeditem__container">
          <tbody>
            {Object.entries(itemToDisplay).map(pair => {
              return (
                <tr className="displayeditem__row">
                  <td className="displayeditem__key">{pair[0]}</td>
                  <td className="displayeditem__value">{pair[1]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }

    return <div>Select a category</div>;
  }
}

export default connect(mapStateToProps)(DisplayedItem);
