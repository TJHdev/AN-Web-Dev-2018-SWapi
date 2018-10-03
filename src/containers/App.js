import React, { Component } from "react";
import { connect } from "react-redux";
import ItemList from "../components/ItemList/ItemList";
import Scroll from "../components/Scroll";
import Navbar from "../components/Navbar/Navbar";
import ErrorBoundary from "../components/ErrorBoundary";
import DisplayedItem from "../components/DisplayedItem/DisplayedItem";
import "./App.css";

const mapStateToProps = state => {
  return {
    data: state.requestData.data,
    isPendingData: state.requestData.isPendingData
  };
};

class App extends Component {
  render() {
    const { isPending, data, isPendingData } = this.props;
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">Starwars API App</h1>
        <Navbar />
        <Scroll>
          <ErrorBoundary>
            <div className="information__container">
              <ItemList data={data} isPendingData={isPendingData} />
              <DisplayedItem />
            </div>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
