import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './App.css';

function App() {
	const now = moment().startOf('week');
	const [week, setWeek] = useState([ now ]);
	
	const calculateWeek = day => {
		const newWeek = [];
		while(newWeek.length < 7){
			newWeek.push(moment(day).add(newWeek.length, 'day'));
		}
		return newWeek;
	}
	
	const changeWeek = dir => {
		const day = dir === 'prev' ? moment(week[0]).subtract(7, 'days')
		: moment(week[0]).add(7, 'days');
		setWeek(calculateWeek(day));
	};
	
	return (
		<div className="App">
			<h2>Weekly Calendar</h2>
			<div id = 'container'>
				<ul>{
					//The solution:
					calculateWeek(week[0]).map((day, idx) => {
						return(
							<li key = { idx }>
								<div>{ moment(day).format( 'dddd' ) }</div>
								<div>{ moment(day).format('MMMM Do') }</div>
								<div>{ moment(day).format('YYYY') }</div>
							</li>
						)
					})
				}</ul>
				<span>
					<input type = 'button' onClick = { () => changeWeek('prev') } value = 'Previous Week'/>
					<input type = 'button' onClick = { () => changeWeek('next') } value = 'Next Week'/>
				</span>
			</div>
		</div>
	);
}

export default App;
