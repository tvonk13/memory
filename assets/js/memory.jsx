import React from 'react';
import ReactDom from 'react-dom';
import { Button } from 'reactstrap';

export default function run_memory(root){
	ReactDOM.render(<MemoryGame />, root);
}

class MemoryGame extends React.Component {
	constructor(props){
		super(props);
		this.state = { clicks: "none" };
	}

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm">
						A
					</div>
					<div className="col-sm">
						B
					</div>
					<div className="col-sm">
						C
					</div>
					<div className="col-sm">
						D
					</div>

				</div>
			</div>
		);
	}
}
