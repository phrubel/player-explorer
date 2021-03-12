import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Player from '../Player/Player';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  faSearch } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
 const[search,setSearch]=useState('');
 const[players,setPlayers]=useState([])

 
    // HandleSearch
    const handleSearch= event => {
        setSearch(event.target.value)
    }

 useEffect(()=>{
    const url=`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => setPlayers(data.player))

 },[search])
    return (
        <div>
            <Header></Header>
            <Container className="mt-5">
             <input  type="text" onChange={handleSearch} className="form-control" placeholder="Search Player By Name or Word"/>
                {
                    players.map(player => <Player player={player}></Player>)
                }

            </Container>
        </div>
    );
};

export default Home;