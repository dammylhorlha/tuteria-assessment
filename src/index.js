import React from 'react';
import ReactDOM from "react-dom";
import Question from './Question';

class App extends React.Component {

	render() {
		return <Question />
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);