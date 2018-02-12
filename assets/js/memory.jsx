import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

var tileList = [{value: "A", show: false, found: false}, {value: "B", show: false, found: false}, {value: "C", show: false, found: false}, {value: "D", show: false, found: false}, {value: "E", show: false, found: false}, {value: "F", show: false, found: false}, {value: "G", show: false, found: false}, {value: "H", show: false, found: false}, {value: "A", show: false, found: false}, {value: "B", show: false, found: false}, {value: "C", show: false, found: false}, {value: "D", show: false, found: false}, {value: "E", show: false, found: false}, {value: "F", show: false, found: false}, {value: "G", show: false, found: false}, {value: "H", show: false, found: false}]

export default function game_init(root) {
  ReactDOM.render(<Demo list={tileList} />, root);
}

class Memory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalList: props.list,
      tileList: props.list,
      score: 0,
      flippedTiles: [],
      message: "",
    };
  }

  flip(index) {
    let listCopy= JSON.parse(JSON.stringify(this.state.tileList));
    let flippedCopy= JSON.parse(JSON.stringify(this.state.flippedTiles)); 
    let scoreCopy= this.state.score;
    
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
          message: "",
        });
    //tile not shown and not found and one or less tile already flipped
    } else if (!listCopy[index].show && !listCopy[index].found && flippedCopy.length < 2) {
        listCopy[index].show = true;
        flippedCopy.push({ //add flipped tile to list of flipped tiles
          tileVal: listCopy[index].value,
          index: index,
        });
        let messageText = "";
        scoreCopy++;
        if (flippedCopy.length === 2 && flippedCopy[0].tileVal === flippedCopy[1].tileVal) { //if two flipped tiles have same value
          listCopy[flippedCopy[0].index].found = true;
          listCopy[flippedCopy[0].index].value = "*";
          listCopy[flippedCopy[1].index].found = true;
          listCopy[flippedCopy[1].index].value = "*";
          flippedCopy.pop();
          flippedCopy.pop();
          messageText="Match found!";
          let flippedCount = 0;
          for(var i = 0; i < listCopy.length; i++) { //check if all tiles have been found
            if(listCopy[i].found){
              flippedCount++;
            }
          }
          if(flippedCount == 16) {
            alert("You Won!");
          }
        }
        this.setState({
          tileList: listCopy,
          flippedTiles: flippedCopy,
          score: scoreCopy,
          message: messageText,
        });
    //two tiles already flipped
    } else if(!listCopy[index].show && !listCopy[index].found && flippedCopy.length == 2) {
        console.log("can't flip more than 2 tiles at once!");
        this.setState({message: "You can't flip more than 2 tiles at once!"});
    //tile already found
    } else {
        console.log("that tile was already found!");
        this.setState({message: "That tile was already found!"});
    }
  }

  render() {
    return (
      <div className="container">
        <RenderGrid list={this.state.tileList} onClick={this.flip.bind(this)}/>
        <div className="score">Score: {this.state.score}</div>
        <button className="restart" onClick={() => this.setState({
            tileList: this.state.originalList,
            score: 0,
            flippedTiles: [],
            message: "",
          })}>Restart</button>
        <div className="message">
          {this.state.message}
        </div>
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
        <button className="found_tile" id={params.value} onClick={() => flip(params.index)}>
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

