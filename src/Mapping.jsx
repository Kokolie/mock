import React from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, Label, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import './styles/ServiceButtons.css'
import './styles/Mapping.css'
import classnames from 'classnames';


class Mapping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {},
      mapping: new Map(),
      mappingChanges: new Map(),
      mappingChanged: false,
      activeTab: "Container Types"

    };
    
    this.changeTab = this.changeTab.bind(this);

  }

  async componentDidMount() {
  }

  changeTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }


  render() 
  {
    return (
    <div>
        <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === 'Container Types' })}
            onClick={() => { this.changeTab('Container Types'); }}
          >
          Container Types
          </NavLink>          
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === 'Locations' })}
            onClick={() => { this.changeTab('Locations'); }}
          >
          Locations
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === 'Organisations' })}
            onClick={() => { this.changeTab('Organisations'); }}
          >
          Organisations
        </NavLink>
        </NavItem> 
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="Container Types"> 
        <br></br>
        <InputGroup className="spacing" size="sm">
          <InputGroupAddon addonType="prepend">42RT</InputGroupAddon>
          <Input />
          <InputGroupAddon addonType="append"><Button color="primary">&#65291;</Button></InputGroupAddon>
        </InputGroup>
        <InputGroup className="spacing" size="sm">
          <InputGroupAddon className="offname" addonType="prepend">42SN</InputGroupAddon>
          <Input />
          <InputGroupAddon addonType="append"><Button color="primary">&#65291;</Button></InputGroupAddon>
        </InputGroup>        
        <InputGroup className="spacing" size="sm">
          <InputGroupAddon className="offname" addonType="prepend">42TD</InputGroupAddon>
          <Input />
          <InputGroupAddon addonType="append"><Button color="primary">&#65291;</Button></InputGroupAddon>
        </InputGroup>        
        <InputGroup className="spacing" size="sm">
          <InputGroupAddon className="offname" addonType="prepend">22GP</InputGroupAddon>
          <Input />
          <InputGroupAddon addonType="append"><Button color="primary">&#65291;</Button></InputGroupAddon>
        </InputGroup>        
                
      <Button className="service-button" color="success">Save Changes</Button>
      <Button className="service-button" color="danger">Discard Changes</Button>
      </TabPane>
      <TabPane tabId="Locations">
        <br></br>
        <Form>  
        <FormGroup>
          <Label for="Host">Host:</Label>
          <Input name="Host" id="Host" defaultValue="0" />
        </FormGroup>
        <FormGroup>
          <Label for="Port">Port:</Label>
          <Input name="Port" id="Port" defaultValue="0" />
        </FormGroup>
        <FormGroup>
          <Label for="User">Username:</Label>
          <Input name="User" id="User" defaultValue="0" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password:</Label>
          <Input name="Password" id="Password" defaultValue="0" />
        </FormGroup>
      <Button className="service-button" color="success">Save Changes</Button>
      <Button className="service-button" color="danger">Discard Changes</Button>
      </Form>      
      </TabPane>
      <TabPane tabId="Organisations">   
      <Form>
      <br></br>
      <h6>Change your password:</h6>
      <FormGroup>
        <Input name="newpass" id="newpass" defaultValue="0" />
      </FormGroup>
      <FormGroup>
        <Input name="confirmpass" id="confirmpass" defaultValue="0" />
      </FormGroup>       
      <Button className="service-button" color="success">Change Password</Button>
      </Form>
      </TabPane>
      </TabContent>          
      </div>)
  }
};

export default Mapping;
