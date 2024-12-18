import React from 'react';
import Row from '../Row/Row';
import requests from '../../../utils/requests';

const Rowlist = () => {
    return (
      <>
        <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals}  isLargeRow={true}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Commedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Tv Show" fetchUrl={requests.fetchDocumentaries}/>
      </>
    );
}

export default Rowlist;
