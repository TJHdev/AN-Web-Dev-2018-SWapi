import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList/ItemList';
import Scroll from '../components/Scroll';
import Navbar from '../components/Navbar/Navbar';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
  return {
    data: state.requestData.listItems,
    isPendingData: state.requestData.isPendingData,
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error || state.requestData.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots()
  }

  render() {
    const { searchField, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => { 
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
    <h1>Loading</h1>
    ) : (
      <div className="tc">
      <h1 className="f2">Starwars API App</h1>
      <Navbar />
      <Scroll>
        <ErrorBoundary>
          <ItemList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);