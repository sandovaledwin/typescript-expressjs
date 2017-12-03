import {} from 'jasmine';
import * as request from 'request-promise';

describe( "Simple Validation", () => {
    it( "Expect TRUE", () => {
        expect( true ).toBe( true );
    });
});

describe( "GET /api/people/1/", () => {

    it( "Expect the Luke Skywalker JSON object", ( done ) => {
        
        let options = {
            uri: 'https://swapi.co/api/people/1z/',
            json: true 
        };

        request( options )
        .then( function ( response ) {
            expect( response.name ).toContain( "Luke Skywalker" );
            done();
        })
        .catch( function ( err ) {
            expect( err.statusCode ).toBe( 200 );
            done();
        });                

    });
});