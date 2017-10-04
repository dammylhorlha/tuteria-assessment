import React from 'react'
import './index.css'

export default class QuestionText extends React.Component {

	render(){
		return (
			<div className="question-text">
				{this.props.value}
				<small className="text-muted"> (press A - D to answer)</small>
			</div>
		);
	}
}