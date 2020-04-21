import React from "react";

import Card from "../components/Card";

import BudgetTracker from "../assets/images/BudgetTracker";
import EmployeeDirectory from "../assets/images/EmployeeDirectory";
import VirusWars from "../assets/images/VirusWars";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      constructor(props) {
        super(props);
        this.state = {
          items: [
            {
              id: 0,
              title: "Budget Tracker",
              subTitle: "Keep tabs on your spending",
              imgSrc: BudgetTracker,
              link: "https://budget-tracker-remy.herokuapp.com/",
              selected: false,
            },
            {
              id: 1,
              title: "Garrett Love",
              subTitle: "YouTube channel",
              imgSrc: EmployeeDirectory,
              link: "https://remyguts.github.io/Employee-Directory/",
              selected: false,
            },
            {
              id: 2,
              title: "Virus Wars",
              subTitle: "Save the city from the Corona Virus",
              imgSrc: VirusWars,
              link: "https://project2-remy-owen-ben.herokuapp.com/",
              selected: false,
            },
          ],
        };
      },
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({ items });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around"></Row>
      </Container>
    );
  }
}

export default Carousel;
