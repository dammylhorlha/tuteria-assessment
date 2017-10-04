import React from 'react'
import './index.css'

export default class QuestionImage extends React.Component {

	render(){
		return (
			<div className="question-image">
				<img src={this.props.src}
				     width=""
				     alt={this.props.altText} />
			</div>
		);
	}
}