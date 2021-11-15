import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
	return (
		<div className="notes__main-content">
			<NotesAppBar />
			<div className="notes__content">
				<input
					type="text"
					placeholder="Some awesme title"
					className="notes__title-input"
					autoComplete="off"
				/>
				<textarea
					placeholder="what happened today"
					className="notes__textarea"
				></textarea>

				<div className="notes__image">
					<img
						src="https://www.discordianos.com/uploads/monthly_2021_05/17010.jpg.21224097e1d74cd8bf7dddbca333a809.jpg"
						alt="imagen"
					/>
				</div>
			</div>
		</div>
	);
};
