import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { PageHeader, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TutorCard from './TutorCard.jsx';
import axios from 'axios';

class Home extends Component {
  state = {
    isAuthenticated: false,
    user_id: this.props.id || null,
    tutors: [],
    tests: [],
    photos: {}
  };

  componentDidMount() {
    this.getTutors();
    this.getAllTests();
  }

  getTutors = () => {
    axios
      .get('/tutors')
      .then(({ data }) => {
        let idList = data.map(tutor => tutor.id).join(', ');
        this.setState({
          tutors: data
        });
        return axios.get('/tutors/photo', {
          params: {
            idList
          }
        });
        
      })
      .then(({ data }) => {
        let photoObj = data.reduce((acc, item) => {
          acc[item.user_id] = item.location
          return acc
        }, {})
        this.setState({
          photos: photoObj
        });
      })
      .catch(err => {
        console.error('There was an error getting all the tutors: ', err);
      });
  };

  getAllTests = () => {
    axios
      .get('/tests')
      .then(({ data }) => {
        this.setState({
          tests: data
        });
      })
      .catch(err => {
        console.error('There was an error getting all the tests: ', err);
      });
  };

  render() {
    return (
      <div>
        <Jumbotron className="container">
          <div className="main-info">
            <PageHeader> TutorStream </PageHeader>
            <p>You have questions, we have tutors.</p>
          </div>
          <br />
          <hr />
          <br />
          <div className="main-info">
            <h2>Featured Tutors:</h2>
            <Row>
              <br />
              {this.state.tutors.map(tutor => (
                <Col xs="6" sm="4" key={tutor.id}>
                  <Link to={`/tutors/${tutor.id}`}>
                    <TutorCard
                      key={tutor.id}
                      name={tutor.Name}
                      rating={`${tutor.Rating}.0`}
                      photo={this.state.photos[tutor.id]}
                    />
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
          <br />
          <br />
          <div className="main-info">
            <h2>Tests Available for Tutoring:</h2>
            <br />
            <Row>
              {this.state.tests.map(test => (
                <Col sm="3" key={test.id}>
                  <Link to={`/tests/${test.id}`}>
                    <h3>{test.Name}</h3>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;