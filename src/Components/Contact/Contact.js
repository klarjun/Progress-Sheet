import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar';

function Contact() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
         <NavBar />
        <Container fluid>
          <h1 className="display-3">My Contact Details</h1>
          <p className="lead">I am Kempanahalli L Arjun and here are my contact details </p>
          <p className="lead">Email : klarjun07@gmail.com </p>
          <p className="lead">Phone : 256-468-7710 </p>
          <p className="lead">Typical Wake up / Sleep Hours : Other than bootcamp I will available morning 7AM to 11AM CST via slack </p>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Contact;
