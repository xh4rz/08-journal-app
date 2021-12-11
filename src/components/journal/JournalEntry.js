import React from 'react';

export const JournalEntry = ({ key }) => {
	// console.log(key);
	return (
		<div className="journal__entry pointer">
			<div
				className="journal__entry-picture"
				style={{
					backgroundSize: 'cover',
					backgroundImage:
						'url(https://siaguanta.com/wp-content/uploads/2020/05/que-es-wallpaper1.jpg)'
				}}
			></div>
			<div className="journal__entry-body">
				<p className="journal__entry-title">Un nuevo día</p>
				<p className="journal__entry-content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</div>
			<div className="journal__entry-date-box">
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};
