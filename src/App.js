import './App.css';
import {Row, Col, Nav, Tab} from 'react-bootstrap';
import PlayTab from './components/PlayTab.js'

function Sonnet() {
	return (
		<p>
			test
		</p>
	);
}

function App() {
  return (
    <Tab.Container defaultActiveKey="first" className="main-tabs-container">
      <Row>
        <Col sm={12}>
          <Nav variant="pills" className="flex-row" >
            <Nav.Item>
              <Nav.Link eventKey="first">Home Page</Nav.Link>
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
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="first" className="main-tab">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="second" className="main-tab">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="third" className="main-tab">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth" className="main-tab">
              <PlayTab />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default App;
