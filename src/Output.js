import React, { Component } from 'react';

class Output extends Component{
	render(){
		return(
			<div id="output">
				<div className="images" style={{ marginTop: '5em' }}>
					{this.props.imageProp}
				</div>
			</div>
		)
	}
} 

export default Output;