import React from 'react'
import './index.css'

export default class QuestionTop extends React.Component {

	render(){
		return (
			<div className="question-top clearfix">
				<div className="pull-left">
					<b>Question 2 of 30 </b>- Multiple choice
				</div>
				<div className="pull-right">
					Time remaining : 04:05
				</div>
			</div>
		);
	}
}