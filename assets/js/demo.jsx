import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

export default function run_demo(root) {
  ReactDOM.render(<Demo side={0}/>, root);
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { side: props.side };
  }

  renderTile(i) {
    return (
      <div className="tile">
        {i}
      </div>
    );
  }

  render() {
    const tilesFlipped = 0;

    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            <Tile value="A" show="true" />
          </div>
          <div className="col-1">
            <Tile value="B" show="true" />
          </div>
          <div className="col-1">
            <Tile value="C" show="true" />
          </div>
          <div className="col-1">
            <Tile value="D" show="true" />
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <Tile value="E" show="true" />
          </div>
          <div className="col-1">
            <Tile value="F" show="true" />
          </div>
          <div className="col-1">
            <Tile value="G" show="true" />
          </div>
          <div className="col-1">
            <Tile value="H" show="true" />
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <Tile value="A" show="true" />
          </div>
          <div className="col-1">
            <Tile value="B" show="true" />
          </div>
          <div className="col-1">
            <Tile value="C" show="true" />
          </div>
          <div className="col-1">
            <Tile value="D" show="true" />
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <Tile value="E" show="true" />
          </div>
          <div className="col-1">
            <Tile value="F" show="true" />
          </div>
          <div className="col-1">
            <Tile value="G" show="true" />
          </div>
          <div className="col-1">
            <Tile value="H" show="true" />
          </div>
        </div>
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
    return (
      <RenderTile show={this.state.show} value={this.state.value} />
    );
  }
}

function RenderTile(params) {
  if (params.show === "true") {
      return (
        <div className="tile" id={params.value}>{params.value}</div>
      );
  } else { 
      return (
        <div classname="tile" id={params.value}></div>
      );
  }  
}
