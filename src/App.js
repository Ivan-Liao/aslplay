import React, {useState} from 'react';
import './App.css';
import {Row, Col, Nav, Tab, Navbar} from 'react-bootstrap';
import PlayTab from './components/PlayTab.js'


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
                <Sonnet />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Sonnet />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Sonnet />
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
