import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

export default function run_demo(root) {
  ReactDOM.render(<Demo score={0}/>, root);
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: props.score };
  }

  incrementScore() {
    const currentScore = this.state.score;
    this.state.score = currentScore + 1;
  }

  render() {

    return (
      <div className="container">
        <RenderGrid />
        <div className="score">Score: {this.state.score}</div>
      </div>
    );
  }
}

class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
      show: props.show,
    }
  }

  toggleShow() {
    if(this.state.show === "true") {
      this.setState({show: "false"});
    } else {
      this.setState({show: "true"});
    }
    console.log("toggleShow() called: ", this.state.show);
  }

  render() {
    var toggle = this.toggleShow.bind(this);
    if (this.state.show === "true") {
      return (
        <button className="tile" id={this.state.value} onClick={toggle}>
          {this.state.value}
        </button>
      );
    } else {
      return (
        <button className="tile" id={this.state.value} onClick={toggle}></button>
      );
    }
  }
}

function RenderTile(params) {
  if (params.show === "true") {
      return (
        <button className="tile" id={params.value}>
          {params.value}
        </button>
      );
  } else {
      return (
        <button className="tile" id={params.value}> </button>
      );
  }
}

function RenderGrid() {
  return (
    <div className="grid">
      <div className="row">
        <Tile value="A" show="false" />
        <Tile value="B" show="false" />
        <Tile value="C" show="false" />
        <Tile value="D" show="false" />
      </div>
      <div className="row">
        <Tile value="E" show="false" />
        <Tile value="F" show="false" />
        <Tile value="G" show="false" />
        <Tile value="H" show="false" />
      </div>
      <div className="row">
        <Tile value="A" show="false" />
        <Tile value="B" show="false" />
        <Tile value="C" show="false" />
        <Tile value="D" show="false" />
      </div>
      <div className="row">
        <Tile value="E" show="false" />
        <Tile value="F" show="false" />
        <Tile value="G" show="false" />
        <Tile value="H" show="false" />
      </div>
    </div>
  );
}

