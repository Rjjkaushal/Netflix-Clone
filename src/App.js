import React from "react";
import './App.css';
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav"
function App() {
  return (
    <div className="app">
    <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" 
      isLargeRow
      fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
