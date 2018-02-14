import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

var tileList = [{value: "A", show: false, found: false}, {value: "B", show: false, found: false}, {value: "C", show: false, found: false}, {value: "D", show: false, found: false}, {value: "E", show: false, found: false}, {value: "F", show: false, found: false}, {value: "G", show: false, found: false}, {value: "H", show: false, found: false}, {value: "A", show: false, found: false}, {value: "B", show: false, found: false}, {value: "C", show: false, found: false}, {value: "D", show: false, found: false}, {value: "E", show: false, found: false}, {value: "F", show: false, found: false}, {value: "G", show: false, found: false}, {value: "H", show: false, found: false}]

export default function game_init(root, channel) {
  ReactDOM.render(<Memory channel={channel} />, root);
}

class Memory extends React.Component {
  constructor(props) {
    super(props);
    this.channel = props.channel;
    this.state = {
      originalList: props.list,
      tileList: props.list,
      score: 0,
      flippedTiles: [],
      message: "",
    };

    this.channel.join()
      .receive("ok", this.gotView().bind(this))
      .receive("error", resp => {console.log("Unable to join", resp)});
  }

  gotView(view) {
    console.log("New view", view);
    this.setState(view.game);
  }

  sendClick(ev) {
    this.channel.push("tileClick", { index: ev.index, list: ev.list, flippedTiles: ev.flippedTiles })
      .receive("ok", this.gotView.bind(this));
  }

  render() {
    return (
      <div className="container">
        <RenderGrid list={this.state.tileList} onClick={this.sendClick.bind(this)} flippedTiles={this.state.flippedTiles}/>
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
  var sendClick=params.onClick;
  if (params.show && !params.found) {
      return (
        <button className="tile" id={params.value} onClick={() => sendClick(params)}>
          {params.value}
        </button>
      );
  } else if (!params.show && !params.found){
      return (
        <button className="tile" id={params.value} onClick={() => sendClick(params)}> </button>
      );
  } else if (params.found) {
      return (
        <button className="found_tile" id={params.value} onClick={() => sendClick(params)}>
          {params.value}
        </button>
      );
  }
}

function createRow(params, startInd, endInd) {
  var row = [];

  for(var i=startInd; i<=endInd; i++) {
    row.push(<RenderTile value={params.list[i].value} show={params.list[i].show} onClick={params.onClick} index={i} list={params.list} flippedTiles={params.flippedTiles} />);
  }

  return (row);
}

function RenderGridV2(params) {
  var row1 = createRow(params, 0, 3);
  var row2 = createRow(params, 4, 7);
  var row3 = createRow(params, 8, 11);
  var row4 = createRow(params, 12, 15);

  return (
    <div className="grid">
      <div className="row">
        {row1}
      </div>
      <div className="row">
        {row2}
      </div>
      <div className="row">
        {row3}
      </div>
      <div className="row">
        {row4}
      </div>
    </div>);
}

function RenderGrid(params) {
  return (
    <div className="grid">
      <div className="row">
        <RenderTile value={params.list[0].value} show={params.list[0].show} onClick={params.onClick} index={0} list={params.list} flippedTiles={params.flippedTiles} />
        <RenderTile value={params.list[1].value} show={params.list[1].show} onClick={params.onClick} index={1} list={params.list} flippedTiles={params.flippedTiles} />
        <RenderTile value={params.list[2].value} show={params.list[2].show} onClick={params.onClick} index={2} list={params.list} flippedTiles={params.flippedTiles} />
        <RenderTile value={params.list[3].value} show={params.list[3].show} onClick={params.onClick} index={3} list={params.list} flippedTiles={params.flippedTiles} />
      </div>
      <div className="row">
        <RenderTile value={params.list[4].value} show={params.list[4].show} onClick={params.onClick} index={4} list={params.list} flippedTiles={params.flippedTiles} />
        <RenderTile value={params.list[5].value} show={params.list[5].show} onClick={params.onClick} index={5} list={params.list} flippedTiles={params.flippedTiles} />
        <RenderTile value={params.list[6].value} show={params.list[6].show} onClick={params.onClick} index={6} list={params.list} flippedTiles={params.flippedTiles} />
        <RenderTile value={params.list[7].value} show={params.list[7].show} onClick={params.onClick} index={7} list={params.list} flippedTiles={params.flippedTiles} />
      </div>
      <div className="row">
        <RenderTile value={params.list[8].value} show={params.list[8].show} onClick={params.onClick} index={8} list={params.list} flippedTiles={params.flippedTiles} />
        <RenderTile value={params.list[9].value} show={params.list[9].show} onClick={params.onClick} index={9} list={params.list} flippedTiles={params.flippedTiles} />
        <RenderTile value={params.list[10].value} show={params.list[10].show} onClick={params.onClick} index={10} list={params.list} flippedTiles={params.flippedTiles} />
        <RenderTile value={params.list[11].value} show={params.list[11].show} onClick={params.onClick} index={11} list={params.list} flippedTiles={params.flippedTiles} />
      </div>
      <div className="row">
        <RenderTile value={params.list[12].value} show={params.list[12].show} onClick={params.onClick} index={12} list={params.list} flippedTiles={params.flippedTiles} />
        <RenderTile value={params.list[13].value} show={params.list[13].show} onClick={params.onClick} index={13} list={params.list} flippedTiles={params.flippedTiles} />
        <RenderTile value={params.list[14].value} show={params.list[14].show} onClick={params.onClick} index={14} list={params.list} flippedTiles={params.flippedTiles} />
        <RenderTile value={params.list[15].value} show={params.list[15].show} onClick={params.onClick} index={15} list={params.list} flippedTiles={params.flippedTiles} />
      </div>
    </div>
  );
}

