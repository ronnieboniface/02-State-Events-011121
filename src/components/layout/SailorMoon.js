import React from 'react';

class SailorMoon extends React.Component {

  state = {
    likes: 0
  };

  upVote = () => {
    this.setState(prevState => {
      return {
        likes: prevState.likes + 1
      }
    });
  };

  downVote = (event) => {
    if (this.state.likes > 0) {
      this.setState(prevState => {
        return {
          likes: prevState.likes - 1
        };
      });
    } else {
      event.target.parentElement.disabled = true;
    }
  };

  render(){
    return (
      <div className="sailor-card">
        <div className="img-container">
        <img 
          src={this.props.image} 
          alt={this.props.name}
          className="sailor-img" 
        />
        </div>
        <div className="sailor-info">
          <div className="name-likes">
            <h1>Sailor {this.props.name}</h1>
            <h3>{this.state.likes} likes</h3>
          </div>
          <div className="btn-group">
            <button onClick={this.upVote} >
              <i className="far fa-thumbs-up"></i>
            </button>
            <button onClick={this.downVote}>
              <i className="far fa-thumbs-down"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };
};

export default SailorMoon;