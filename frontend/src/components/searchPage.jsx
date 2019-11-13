import React, { Component } from 'react';
import styles from './searchPage.module.css';
import axios from 'axios';
 

class SearchPage extends Component {

  state = {
    artists: null,
    searchText: null
  }

  handleChange = (evt) => {
    this.setState({ searchText: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    alert('You submitted a request');
    this.setState({ searchText: ''})
  };

  render() {
    return (
      <div>
        <h1>Search Page</h1>
        <form className={styles.searchContainer} onSubmit={this.handleSubmit}>
          <input className={styles.searchField} type="text" placeholder="Search"
          value={this.state.searchText} 
          onChange={this.handleChange}></input>
          <button className={styles.searchButton}>Search</button>
        </form>
      </div>
    )
  };
};


export default SearchPage;

// type="submit" onClick={this.onButtonClick}