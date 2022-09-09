import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dz5fz5bec',
    api_key: '266472684393391',
    api_secret: 'cVZjM6VgEGTVnWGIjM6C4l2GCMI',
    secure: true
});

describe('Pruebas en fileUpload', () => { 

    test('debe de subir el archivo correctamente a cloudinary', async() => {

        const imageUrl = 'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204__340.jpg';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto_prueba.jpg');

        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length -1 ].replace('.jpg','');
        
        const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image'
        });
        // console.log({ cloudResp })
    });

    test('debe de retornar null', async() => {

        const file = new File([], 'foto_prueba.jpg');
        const url = await fileUpload( file );
        expect( url ).toBe(null);
    })
});