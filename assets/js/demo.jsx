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
    if(this.state.show) {
      this.setState({show: "false"});
    } else {
      this.setSTate({show: "true"});
    }
  }

  render() {
    if (this.state.show === "true") {
      return (
        <button className="tile" id={this.state.value} onClick={() => {
            if(this.state.show === "false") {
              this.setState({show: "true"})
            } else if(this.state.show === "true"){
              this.setState({show: "false"})
            }
        }}>
          {this.state.value}
        </button>
      );
    } else {
      return (
        <button className="tile" id={this.state.value}></button>
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
        <Tile value="A" show="true" />
        <Tile value="B" show="true" />
        <Tile value="C" show="true" />
        <Tile value="D" show="true" />
      </div>
      <div className="row">
        <Tile value="E" show="true" />
        <Tile value="F" show="true" />
        <Tile value="G" show="true" />
        <Tile value="H" show="true" />
      </div>
      <div className="row">
        <Tile value="A" show="true" />
        <Tile value="B" show="true" />
        <Tile value="C" show="true" />
        <Tile value="D" show="true" />
      </div>
      <div className="row">
        <Tile value="E" show="true" />
        <Tile value="F" show="true" />
        <Tile value="G" show="true" />
        <Tile value="H" show="true" />
      </div>
    </div>
  );
}

