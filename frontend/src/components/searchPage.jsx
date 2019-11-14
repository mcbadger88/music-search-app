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

  callback = (json) => {
    let array = []
    json.message.body.artist_list.forEach(element => array.push(element))
    console.log(array)
    this.setState({
      artists: array
    })
  }
  handleSubmit = async (evt) => {
    evt.preventDefault();
    alert('You submitted a request');
    const searchResults = await axios.get(`https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=this.callback&q_artist=${this.state.searchText}&apikey=	05b96e13b7db11255012f495057b0ba9`)
    // the following has a CORS error - why?
    // const searchResults = await axios.get(`https://api.musixmatch.com/ws/1.1/artist.search?q_artist=prodigy&format=json&page_size=5&apikey=05b96e13b7db11255012f495057b0ba9`)
    eval(searchResults.data)
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
        <p>{this.state.artists && this.state.artists.map(element => <p>{JSON.stringify(element)}</p>)}</p>
      </div>
    )
  };
};


export default SearchPage;

// type="submit" onClick={this.onButtonClick}