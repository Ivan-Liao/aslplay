import React, {useState} from 'react';
import './App.css';
import {Row, Col, Nav, Tab, Navbar} from 'react-bootstrap';
import PlayTab from './components/PlayTab.js'
import Logo from './logo.png';


function Sonnet() {
	return (
		<p>
			To Be Filled
		</p>
	);
}

function App() {
  // states
  const [promptText, setPromptText] = useState("");
  const [screenshot, setScreenshot] = useState();


  // once on load

  return (
      <Tab.Container defaultActiveKey="first" className="main-tabs-container">
        <Row>
          <Col sm={1}>
            <img src={Logo}></img>
          </Col>
          <Col>
            <Nav variant="pills" expand="lg">
              <Nav.Item>
                <Nav.Link eventKey="first">Home </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Learn</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Play</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h1>A Fun Way to Learn ASL!</h1>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h1>1) Watch the modules in the Learn tab</h1>
                <h1>2) Play the minigame and try to make the correct letters</h1>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Row id="modules">
                  <h1 className="moduleh1">A-I</h1>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/q1XGIyVLuHk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Row>
                <Row>
                  <h1 className="moduleh1">J-R</h1>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/mLyvdg2b9EM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Row>
                <Row>
                  <h1 className="moduleh1">S-Z</h1>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/NDpHCcBEIeQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <PlayTab promptText={ promptText } setPromptText={ setPromptText } screenshot={screenshot} setScreenshot={setScreenshot}/>
                <div className="circles">
                  <div className="circle1"></div>
                  <div className="circle2"></div>
                  <div className="circle3"></div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
  );
}

export default App;
