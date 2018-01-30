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

var tileList = [{value: "A", show: false, found: false}, {value: "B", show: false, found: false}, {value: "C", show: false, found: false}, {value: "D", show: false, found: false}, {value: "E", show: false, found: false}, {value: "F", show: false, found: false}, {value: "G", show: false, found: false}, {value: "H", show: false, found: false}, {value: "A", show: false, found: false}, {value: "B", show: false, found: false}, {value: "C", show: false, found: false}, {value: "D", show: false, found: false}, {value: "E", show: false, found: false}, {value: "F", show: false, found: false}, {value: "G", show: false, found: false}, {value: "H", show: false, found: false}]

export default function run_demo(root) {
  ReactDOM.render(<Demo list={tileList} />, root);
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tileList: props.list,
      score: 0,
      flippedTiles: [],
    };
  }

  flip(index) {
    console.log("flip called");
    let listCopy= JSON.parse(JSON.stringify(this.state.tileList));
    let flippedCopy= JSON.parse(JSON.stringify(this.state.flippedTiles)); 
    let scoreCopy= this.state.score;

    console.log("listCopy[index].show: ", listCopy[index].show);
    console.log("listCopy[index].found: ", listCopy[index].found);
    console.log("flippedCopy: ", flippedCopy);

    //tile shown but not found
    if (listCopy[index].show && !listCopy[index].found) {
        listCopy[index].show = false; //set show to false
        if(flippedCopy.length > 0 && flippedCopy[0].index === index) {  //find index of element in flippedTiles and remove it
          flippedCopy.splice(0, 1);
        } else if(flippedCopy.length >0 && flippedCopy[1].index === index) {
          flippedCopy.splice(1, 1);
        }
        this.setState({
          tileList: listCopy,
          flippedTiles: flippedCopy,
        });
    //tile not shown and not found and one or less tile already flipped
    } else if (!listCopy[index].show && !listCopy[index].found && flippedCopy.length < 2) {
        listCopy[index].show = true;
        flippedCopy.push({
          tileVal: listCopy[index].value,
          index: index,
        });
        scoreCopy++;
        if (flippedCopy.length === 2 && flippedCopy[0].tileVal === flippedCopy[1].tileVal) {
          listCopy[flippedCopy[0].index].found = true;
          listCopy[flippedCopy[1].index].found = true;
          flippedCopy.pop();
          flippedCopy.pop();
        }
        this.setState({
          tileList: listCopy,
          flippedTiles: flippedCopy,
          score: scoreCopy,
        });
    //tile found
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
          {params.value}
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
        <RenderTile value={params.list[4].value} show={params.list[4].show} onClick={params.onClick} index={4} />
        <RenderTile value={params.list[5].value} show={params.list[5].show} onClick={params.onClick} index={5} />
        <RenderTile value={params.list[6].value} show={params.list[6].show} onClick={params.onClick} index={6} />
        <RenderTile value={params.list[7].value} show={params.list[7].show} onClick={params.onClick} index={7} />
      </div>
      <div className="row">
        <RenderTile value={params.list[8].value} show={params.list[8].show} onClick={params.onClick} index={8} />
        <RenderTile value={params.list[9].value} show={params.list[9].show} onClick={params.onClick} index={9} />
        <RenderTile value={params.list[10].value} show={params.list[10].show} onClick={params.onClick} index={10} />
        <RenderTile value={params.list[11].value} show={params.list[11].show} onClick={params.onClick} index={11} />
      </div>
      <div className="row">
        <RenderTile value={params.list[12].value} show={params.list[12].show} onClick={params.onClick} index={12} />
        <RenderTile value={params.list[13].value} show={params.list[13].show} onClick={params.onClick} index={13} />
        <RenderTile value={params.list[14].value} show={params.list[14].show} onClick={params.onClick} index={14} />
        <RenderTile value={params.list[15].value} show={params.list[15].show} onClick={params.onClick} index={15} />
      </div>
    </div>
  );
}

