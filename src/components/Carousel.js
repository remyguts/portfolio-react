import React from "react";

import Card from "../components/Card";

import BudgetTracker from "../assets/images/BudgetTracker.png";
import EmployeeDirectory from "../assets/images/EmployeeDirectory.png";
import ProfileGenerator from "../assets/images/ProfileGenerator.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
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
          title: "Profile Generator",
          subTitle:
            "Profiles van be rendered into PDF form from the command line",
          imgSrc: ProfileGenerator,
          link: "https://remyguts.github.io/Developer-Profile-Generator/",
          selected: false,
        },
        {
          id: 2,
          title: "Employee Directory",
          subTitle: "Access any employee",
          imgSrc: EmployeeDirectory,
          link: "https://remyguts.github.io/Employee-Directory/",
          selected: false,
        },
      ],
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

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
