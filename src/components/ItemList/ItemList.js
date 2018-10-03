import React, { Component } from "react";
import { connect } from "react-redux";
import { requestStarwarsData, updateItemSelected } from "../Navbar/actions";
import "./ItemList.css";

const mapDispatchToProps = dispatch => {
  return {
    requestStarwarsData: (category, page, direction) =>
      dispatch(requestStarwarsData(category, page, direction)),
    updateItemSelected: itemNumber => dispatch(updateItemSelected(itemNumber))
  };
};

const mapStateToProps = state => {
  return {
    data: state.requestData.data,
    isPendingData: state.requestData.isPendingData,
    page: state.requestData.page,
    category: state.requestData.category
  };
};

class ItemList extends Component {
  fetchDataArrows = e => {
    const direction = e.target.getAttribute("name");
    if (
      (direction === "next" && this.props.data.next) ||
      (direction === "prev" && this.props.data.previous)
    ) {
      this.props.requestStarwarsData(
        this.props.category,
        this.props.page,
        direction
      );
    }
  };

  updateItemSelected = e => {
    this.props.updateItemSelected(e.target.getAttribute("name"));
  };

  render() {
    const { data, isPendingData, page: pageNumber } = this.props;
    const results = data.results;

    return isPendingData ? (
      <div className="itemlist__container listitem__placeholdercontainer">
        <div className="listitem__placeholder" />
        <div className="listitem__placeholder" />
        <div className="listitem__placeholder" />
        <div className="listitem__placeholder" />
        <div className="listitem__placeholder" />
        <div className="listitem__placeholder" />
        <div className="listitem__placeholder" />
        <div className="listitem__placeholder" />
        <div className="listitem__placeholder" />
        <div className="listitem__placeholder" />
      </div>
    ) : (
      <div className="itemlist__container">
        <div className="itemlist">
          {results.map((result, index) => {
            return (
              <div className="listitem__container">
                <button
                  onClick={this.updateItemSelected}
                  className="listitem__button"
                  key={index}
                  name={index}
                >
                  {result.name || result.title}
                </button>
              </div>
            );
          })}
        </div>
        <div className="pagewidget">
          <h3>Page</h3>
          <div
            name="prev"
            className={
              "pagewidget__arrow" +
              (this.props.data.previous ? "" : " pagewidget__arrow--disabled")
            }
            onClick={this.fetchDataArrows}
          >
            &lArr;
          </div>
          <div className="pagewidget__number">{pageNumber}</div>
          <div
            name="next"
            className={
              "pagewidget__arrow" +
              (this.props.data.next ? "" : " pagewidget__arrow--disabled")
            }
            onClick={this.fetchDataArrows}
          >
            &rArr;
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
