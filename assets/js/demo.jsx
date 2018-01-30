import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

/**
tileList = Tile[];
Tile = {
  value: string,
  show: boolean
  found: boolean
}
**/

var tileList = [{value: "A", show: false, found: false}, {value: "B", show: false, found: false}, {value: "C", show: false, found: false}, {value: "D", show: false, found: false}]

export default function run_demo(root) {
  ReactDOM.render(<Demo list={tileList} score={0}/>, root);
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileList: props.list,
      score: props.score,
      flipedTiles: [],
    };
  }

  incrementScore() {
    const currentScore = this.state.score;
    this.state.score = currentScore + 1;
  }

  flip(index) {
    console.log("flip called");
    let listCopy= JSON.parse(JSON.stringify(this.state.tileList));
    if (this.state.tileList[index].show && !this.state.tileList[index].found) {
        listCopy[index].show = false;
        this.setState({tileList: listCopy});
    } else if (!this.state.tileList[index].show && !this.state.tileList[index].found) {
        listCopy[index].show = true;
        this.setState({tileList: listCopy});
    } else {
        console.log("this tile has already been found");
    }
  }

  render() {

    return (
      <div className="container">
        <RenderGrid list={this.state.tileList} onClick={this.flip.bind(this)}/>
        <div className="score">Score: {this.state.score}</div>
      </div>
    );
  }
}

function RenderTile(params) {
  var flip=params.onClick;
  if (params.show && !params.found) {
      return (
        <button className="tile" id={params.value} onClick={() => flip(params.index)}>
          {params.value}
        </button>
      );
  } else if (!params.show && !params.found){
      return (
        <button className="tile" id={params.value} onClick={() => flip(params.index)}> </button>
      );
  } else if (params.found) {
      return (
        <button className="found-tile" id={params.value} onClick={() => flip(params.index)}>
          Found!
        </button>
      );
  }
}

function RenderGrid(params) {
  return (
    <div className="grid">
      <div className="row">
        <RenderTile value={params.list[0].value} show={params.list[0].show} onClick={params.onClick} index={0} />
        <RenderTile value={params.list[1].value} show={params.list[1].show} onClick={params.onClick} index={1} />
        <RenderTile value={params.list[2].value} show={params.list[2].show} onClick={params.onClick} index={2} />
        <RenderTile value={params.list[3].value} show={params.list[3].show} onClick={params.onClick} index={3} />
      </div>
      <div className="row">
        <RenderTile value="E" show={false} found={false} onClick={params.onClick} />
        <RenderTile value="F" show={false} found={false} onClick={params.onClick} />
        <RenderTile value="G" show={false} found={false} onClick={params.onClick} />
        <RenderTile value="H" show={false} found={false} onClick={params.onClick} />
      </div>
      <div className="row">
        <RenderTile value="A" show={false} found={false} onClick={params.onClick} />
        <RenderTile value="B" show={false} found={false} onClick={params.onClick} />
        <RenderTile value="C" show={false} found={false} onClick={params.onClick} />
        <RenderTile value="D" show={false} found={false} onClick={params.onClick} />
      </div>
      <div className="row">
        <RenderTile value="E" show={false} found={false} onClick={params.onClick} />
        <RenderTile value="F" show={false} found={false} onClick={params.onClick} />
        <RenderTile value="G" show={false} found={false} onClick={params.onClick} />
        <RenderTile value="H" show={false} found={false} onClick={params.onClick} />
      </div>
    </div>
  );
}

