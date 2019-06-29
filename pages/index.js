import React from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";
import "../css/index.css";
import { setSearchField, getRobots } from "../redux-store/actions";
import "tachyons";

const mapStateToProps = state => {
  return {
    robots: state.updateRobotsReducer.robots,
    searchField: state.searchRobots.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

class Index extends React.Component {
  static async getInitialProps({ reduxStore }) {
    await reduxStore.dispatch(
      getRobots("https://jsonplaceholder.typicode.com/users")
    );
    return {};
  }

  render() {
    const { searchField, onSearchChange, robots } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
