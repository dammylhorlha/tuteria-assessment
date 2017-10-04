import React from 'react'
import './index.css'

export default class QuestionOptions extends React.Component {

	render(){
		return (
			<div className="question-options">
				<form className="text-center bold-text">
					<div className="form-group panel panel-body panel-success option active">
						<span className="pull-left choice"> A </span>
						<input type="radio" className="pull-right"
						       name="answer" value="a" /> {this.props.options.a}
					</div>
					<div className="form-group panel panel-body panel-default option">
						<span className="pull-left choice "> B </span>
						<input type="radio"
						       className="pull-right"
						       name="answer" value="b"/> {this.props.options.b}
					</div>
					<div className="form-group panel panel-body panel-default option ">
						<span className="pull-left choice"> C </span>
						<input type="radio" className="pull-right"
						       name="answer" value="c"/> {this.props.options.c}
					</div>
					<div className="form-group panel panel-body panel-default option ">
						<span className="pull-left choice"> D </span>
						<input type="radio" className="pull-right"
						       name="answer" value="d"/> {this.props.options.d}
					</div>

					<div className="question-buttons margin-top-20">
						<button className="btn btn-lg btn-default pull-left margin-vertical-10">
							<i className="fa fa-angle-left fa-fw"></i>
							Previous Question
						</button>
						<button className="btn btn-lg btn-primary pull-right margin-vertical-10">
							Next Question
							<i className="fa fa-angle-right fa-fw"></i>
						</button>
					</div>

				</form>
			</div>
		);
	}
}