import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
	const { active: note } = useSelector((state) => state.notes);

	const [formValues, handleInputChange, reset] = useForm(note);

	const { body, title } = formValues;

	const activeId = useRef(note.id);

	useEffect(() => {
		if (note.id !== activeId.current) {
			reset(note);
			activeId.current = note.id;
		}
	}, [note, reset]);

	return (
		<div className="notes__main-content">
			<NotesAppBar />
			<div className="notes__content">
				<input
					type="text"
					placeholder="Some awesme title"
					className="notes__title-input"
					autoComplete="off"
					value={title}
					onChange={handleInputChange}
				/>
				<textarea
					placeholder="what happened today"
					className="notes__textarea"
					value={body}
					onChange={handleInputChange}
				></textarea>
				{note.url && (
					<div className="notes__image">
						<img
							src="https://www.discordianos.com/uploads/monthly_2021_05/17010.jpg.21224097e1d74cd8bf7dddbca333a809.jpg"
							alt="imagen"
						/>
					</div>
				)}
			</div>
		</div>
	);
};
