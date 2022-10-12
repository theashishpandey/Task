import React, { Component } from "react";
import "../App.css";
import { Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
class MoviesSearch extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
      nodata: false,
    };
  }
  search(key) {
    return key && Object.keys(key).length > 0
      ? fetch("https://api.jikan.moe/v4/anime?q=" + key).then((data) => {
          data.json().then((resp) => {
            console.log("resp", resp);
            if (resp.length > 0) {
              this.setState({ list: resp, nodata: false });
            } else {
              this.setState({ nodata: true, list: resp });
            }
          });
        })
      : "";
  }

  render() {
    return (
      <div className="sc">
        <h1>Search Now</h1>
        <input
          type="text"
          onChange={(event) => this.search(event.target.value)}
          placeholder="Search any Movies"
        />
        <div>
          <br />
          {this.state.list &&
          this.state.list &&
          Object.keys(this.state.list.data).length > 0 ? (
            <div>
              <Row xs={2} sm={4} className="g-4">
                <h1 className="rl-h">Movies List :</h1>

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
            <p>No Movies Found</p>
          )}
        </div>
      </div>
    );
  }
}

export default MoviesSearch;
