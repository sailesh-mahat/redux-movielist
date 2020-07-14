import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import updateMovies from './store/actions/updateMovies';
import fetchUsers from './store/actions/fetchUsers'

function App(props) {
  return (
    <div className="App">
      <h3>REDUX MOVIELIST APP</h3>
      <br/>
      <span
      style={{color:'green'}}
      >YOUR CURRENTMOVIE IS: </span>{props.movies.name}
      <br/>
      <p><button onClick={props.updateMovies}>SELECT NEW MOVIE</button></p>
      <br/>
      <button onClick={props.fetchUsers}>FETCH USERS</button>
    </div>
  );
};

const MapStateToProps = (state) => {
  return {
    movies: state.movies,
    users: state.users
  };

};

const MapDispatchToProps = (dispatch) => {
  return {
    updateMovies: () => dispatch(updateMovies),
    fetchUsers: () => dispatch(fetchUsers)
  }
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
