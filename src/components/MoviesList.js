import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    this.getdata();
  }
  getdata() {
    fetch("https://api.jikan.moe/v4/anime").then((response) => {
      response.json().then((result) => {
        console.log(result, "Ashish");

        this.setState({ list: result });
      });
    });
  }



  render() {
    return (
      <div>
        <h1 className="rl-h">Movies List </h1>
        <br />
        {this.state.list ? (
          <div>
            <Row xs={2} sm={4} className="g-4">
              {this.state.list.data.map((item) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src={item.images.jpg.image_url} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Title>Episodes:{item.episodes}</Card.Title>

                      <Card.Text>{item.synopsis}</Card.Text>
                      <Button href={item.trailer.url} target="_blank">
                        Watch Trailer
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ) : (
          <p>Please Wait...</p>
        )}
      </div>
    );
  }
}

export default MovieList;
