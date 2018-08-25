import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestStarwarsData } from './actions.js';

import './Navbar.css'

export class Navbar extends Component {
  fetchData = (e) => {
    this.props.fetchData(e.target.name)
  }
  render() {
    return (
      <div className="pa2">
        <button name="people" className="navbar__button" onClick={this.fetchData}>Characters</button>
        <button name="films" className="navbar__button" onClick={this.fetchData}>Films</button>
        <button name="species" className="navbar__button" onClick={this.fetchData}>Species</button>
        <button name="starships" className="navbar__button" onClick={this.fetchData}>Starships</button>
        <button name="vehicles" className="navbar__button" onClick={this.fetchData}>Vehicles</button>
        <button name="planets" className="navbar__button" onClick={this.fetchData}>Planets</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: (button) => dispatch(requestStarwarsData(button))
});


export default connect(undefined, mapDispatchToProps)(Navbar)