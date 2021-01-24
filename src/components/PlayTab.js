import React, {useEffect} from 'react';
import {Container, Row, Button} from 'react-bootstrap';
import Camera from '../camera.png';
const alphabet = 'ABCDEFGIJKLMNOPQRSTUVWXYZ'.split('');

function PlayTab({promptText, setPromptText}) {
  // one off useEffects
  useEffect(() => {
    getAlphabetHandler();
  },[])

  function getAlphabetHandler() {
    setPromptText(alphabet[Math.floor(Math.random() * alphabet.length)]);
  }
  return (

    <Container>
      <Row>
        <div className="play-prompt">
          Make the sign for "{promptText}"
        </div>
      </Row>
      <Row>
        <Button className="camera-button">
          <img src={Camera} width="300"/></Button>
      </Row>
      <Row>
        <input accept="image/*" id="icon-button-file" type="file" capture="user"/>
      </Row>
      <Row>
        <Button onClick={getAlphabetHandler} className="general-button">New Prompt</Button>
      </Row>
    </Container>
  );
}

export default PlayTab;