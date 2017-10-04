import React from 'react';
import QuestionText from './QuestionText';
import QuestionTop from'./QuestionTop';
import QuestionOptions from'./QuestionOptions';
import QuestionImage from'./QuestionImage';

import './index.css';

class Question extends React.Component {

	render () {
		var question = {
			text: "In the diagram to the right, what's the average number of pupils that loved the Bacon flavor and Cheese & Onion flavour?",
			options: {
				a: "23 pupils",
				b: "13 puppils",
				c: "8 pupils",
				d: "6 pupils"
			},
			image: {
				src: "graphs_7.jpg",
				altText: "bar chart",
			}
		};

		return (


			<div className="question container margin-20">

				<QuestionTop />

				<div className="question-body panel panel-body panel-default">
					<div className="row">
						<div className="col-sm-offset-1 col-sm-6">

							<QuestionText value={question.text} />
							<QuestionOptions
								options={question.options}
							/>

						</div>
						<div className="col-sm-4">

							<QuestionImage src={question.image.src} altText={question.image.altText} />

						</div>
					</div>
				</div>
			</div>
		)

	}

}
;
export default Question;