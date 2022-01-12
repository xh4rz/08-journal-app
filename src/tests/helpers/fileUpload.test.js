import { fileUpload } from '../../helpers/fileUpload';

describe('Pruebas en fileUpload', () => {
	test('debe de cargar un archivo y retornar el URL', async () => {
		const resp = await fetch(
			'https://cdn.pixabay.com/photo/2016/12/06/01/26/colour-1885352_960_720.jpg'
		);
		const blob = await resp.blob();
		const file = new File([blob], 'foto.jpg');
		const url = await fileUpload(file);
		expect(typeof url).toBe('string');
	});

	test('debe de retornar un error', async () => {
		const file = new File([], 'foto.jpg');
		const url = await fileUpload(file);
		expect(url).toBe(null);
	});
});
