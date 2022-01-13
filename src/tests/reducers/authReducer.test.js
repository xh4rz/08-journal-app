import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {
	test('debe de logearse', () => {
		const initState = {};
		const action = {
			type: types.login,
			payload: {
				uid: 'abc',
				displayName: 'harold'
			}
		};
		const state = authReducer(initState, action);
		expect(state).toEqual({
			uid: 'abc',
			name: 'harold'
		});
	});

	test('debe de realizar el logout', () => {
		const initState = {
			uid: '2rYxVxa4UGORdKsPWhHbQOjGqnW2',
			name: 'harold'
		};
		const action = {
			type: types.logout
		};
		const state = authReducer(initState, action);
		expect(state).toEqual({});
	});

	test('no debe de hacer cambios en el state', () => {
		const initState = {
			uid: '2rYxVxa4UGORdKsPWhHbQOjGqnW2',
			name: 'harold'
		};
		const action = {
			type: 'asdasd'
		};
		const state = authReducer(initState, action);
		expect(state).toEqual(initState);
	});
});
