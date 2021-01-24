import React, {useEffect} from 'react';
import {Container, Row, Button, Col} from 'react-bootstrap';
import Camera from '../camera.png';
import Webcam from 'react-webcam';
import Resizer from 'react-image-file-resizer';

// const
const alphabet = 'ABCDEFGIJKLMNOPQRSTUVWXYZ'.split('');

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const resizeFile = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 28, 28, 'image/jpeg', 100, 0,
    uri => {
      resolve(uri);
    },
    'base64'
    );
  });

  const capture = React.useCallback(() => {
    var imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    // imageSrc = resizeFile(imageSrc);
    // setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
  
  // const requestOptions = {
  //   method: 'PUT',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ title: 'React PUT Request Example' })
  // };
  // fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
  //     .then(response => response.json())
  //     .then(data => this.setState({ postId: data.id }));

  return (
    <>
      <Row>
        <Col sm={6}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={320}
            height={240}
          />
        </Col>
        <Col sm={6}>
          {imgSrc && (
              <img
                src={imgSrc}
              />
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={capture}><img src={Camera} width="100"/></Button>
        </Col>
      </Row>
    </>
  );
};


function PlayTab({promptText, screenshot, setScreenshot, setPromptText}) {
  // one off useEffects
  useEffect(() => {
    getAlphabetHandler();
  }, [])

  // references


  // functions
  function getAlphabetHandler() {
    setPromptText(alphabet[Math.floor(Math.random() * alphabet.length)]);
  }

  function cameraClickHandler() {
    // screenshot = this.refs.webcam.getScreenShot();
    // setScreenshot({screenshot});
  }
  return (

    <Container>
      <Row>
        <div className="play-prompt">
          Make the sign for "{promptText}"
        </div>
      </Row>
      <WebcamCapture audio={false}/>
      <Row>
        <Button onClick={getAlphabetHandler} className="general-button">New Prompt</Button>
      </Row>
    </Container>
  );
}

export default PlayTab;