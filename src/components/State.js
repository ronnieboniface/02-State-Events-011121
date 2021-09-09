import { Component } from 'react';

class State extends Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  render() {
    return (
      <div className="state-group">
        <p>This button has been pressed {this.state.count} time(s).</p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  };
};

export default State;