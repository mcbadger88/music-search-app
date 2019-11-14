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

  handleSubmit = async (evt) => {
    evt.preventDefault();
    alert('You submitted a request');
    const searchResults = await axios.get(`https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=${this.state.searchText}&apikey=	05b96e13b7db11255012f495057b0ba9`)
    console.log(searchResults.data)
    this.setState({ searchText: ''})
    this.setState({artists: searchResults.data})
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
        <p>{this.state.artists}</p>
      </div>
    )
  };
};


export default SearchPage;

// type="submit" onClick={this.onButtonClick}