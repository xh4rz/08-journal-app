import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({
	cloud_name: 'dzwstma9h',
	api_key: '775987916471197',
	api_secret: 'pQyCbeuuLvFlKPNkPm0SiQcG8z0'
});

describe('Pruebas en fileUpload', () => {
	test('debe de cargar un archivo y retornar el URL', async () => {
		const resp = await fetch(
			'https://cdn.pixabay.com/photo/2016/12/06/01/26/colour-1885352_960_720.jpg'
		);
		const blob = await resp.blob();
		const file = new File([blob], 'foto.jpg');
		const url = await fileUpload(file);
		expect(typeof url).toBe('string');

		// Borrar imagen por ID
		const segments = url.split('/');
		const imageId = segments[segments.length - 1].replace('.jpg', '');
		cloudinary.v2.api.delete_resources(imageId, {}, () => {});
	});

	test('debe de retornar un error', async () => {
		const file = new File([], 'foto.jpg');
		const url = await fileUpload(file);
		expect(url).toBe(null);
	});
});
