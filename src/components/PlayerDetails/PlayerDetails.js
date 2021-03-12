import React, { useEffect, useState } from 'react';
import './PlayerDetails.css'
import { Card, Container, } from 'react-bootstrap';
import { useParams } from 'react-router';

const PlayerDetails = () => {
    const { idPlayer } = useParams();
    const [player, setPlayer] = useState([])
    const { strThumb, strPlayer, strNationality, strTeam, dateBorn,strDescriptionEN, dateSigned, strBirthLocation, strSport, strGender, strPosition, strHeight, strWeight, strFanart1 } = player

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${idPlayer}`)
            .then(res => res.json())
            .then(data => setPlayer(data.players[0]))
    }, [idPlayer])


    return (
        <div style={{backgroundColor:'lightgrey'}}>
            <div className="row">
                <img className='banner' src={strFanart1} alt="" />
            </div>

            
               <div>
               <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={strThumb} />
                    <Card.Body className="cardBody">
                        <Card.Title> <h1 style={{fontWeight:"700"}}>Name: {strPlayer}</h1> </Card.Title>
                        <Card.Text className="playerDetails">
                            <h5>Gender: <span>{strGender}</span></h5>
                            <h5>Birth: <span>{dateBorn}</span></h5>
                            <h5>Location:<span>{strBirthLocation}</span></h5>
                            <h5> Height: <span>{strHeight}</span></h5>
                            <h5>Weight: <span>{strWeight}</span></h5>
                            <h5>Nationality: <span>{strNationality}</span></h5>
                            <h5>Sport: <span>{strSport}</span></h5>
                            <h5>Team: <span>{strTeam}</span></h5>
                            <h5>Position: <span>{strPosition}</span></h5>
                            <h5>Signed: <span> {dateSigned}</span></h5>
                        </Card.Text>
                    </Card.Body>
                </Card>
               </div>
           
            <Container className="mt-4">
                <div className="team-history">
                <p>{strDescriptionEN}</p>
                </div> 
            </Container>
            {/* <div className=" text-center">
                <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer" >  <img className="social-icon" src={Facebook} alt="" /></a>
                <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer" > <img className="social-icon" src={Twitter} alt="" /></a>
                <a href={`https://${strYoutube}`} target="_blank" rel="noopener noreferrer" > <img className="social-icon" src={Youtube} alt="" /></a>
            </div> */}
        </div>
    );
};

export default PlayerDetails;