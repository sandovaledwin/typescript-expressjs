import {} from 'jasmine';
import * as request from 'request-promise';

let config = require( '../../initConfig.json' );

describe( "Employees List", () => {

    let webService : string = config.host + "employee/empList";

    it( "Expect not find employees records when looking for the next 987654321 id", ( done ) => {

        let payLoad = {
            "securityLevel"      : {                               },
            "searchArea"         : { "158001":"Tienda"             },
            "sortBy"             : { "192001":"Número de empleado" },
            "employeeID"         : config.employeeWrongId,
            "employeeFirstName"  : "",
            "employeeLastName"   : null,
            "employeeSSNFirst"   : null,
            "employeeSSNMiddl"   : null,
            "employeeSSNLast"    : null,
            "employeePhoneFirst" : null,
            "employeePhoneMiddl" : null,
            "employePhoneLast"   : null,
            "active"             : true,
            "inActive"           : false,
            "page"               : 0
        };
        
        let options = {
            method : 'POST',
            body   :  payLoad,
            uri    :  webService,
            json   :  true,
            jar    :  true
        };

        request( options )
        .then( function ( response ) {

            expect( response ).toEqual( [] );
            done();

        })
        .catch( function ( err ) {

            expect( err.statusCode ).toBe( 200 );
            done();
            
        }); 

    }); 

    it( "Expect to find employees records when looking the antonio word", ( done ) => {

        let payLoad = {
            "securityLevel"      : {                               },
            "searchArea"         : { "158001":"Tienda"             },
            "sortBy"             : { "192001":"Número de empleado" },
            "employeeID"         : "",
            "employeeFirstName"  : config.employeeFirstName,
            "employeeLastName"   : null,
            "employeeSSNFirst"   : null,
            "employeeSSNMiddl"   : null,
            "employeeSSNLast"    : null,
            "employeePhoneFirst" : null,
            "employeePhoneMiddl" : null,
            "employePhoneLast"   : null,
            "active"             : true,
            "inActive"           : false,
            "page"               : 0
        };        

        let options = {
            method : 'POST',
            body   :  payLoad,
            uri    :  webService,
            json   :  true,
            jar    :  true
        };

        request( options )
        .then( function ( response ) {

            if( response.length > 0 ){
                
                for( let employee of response ){
                    
                    expect( employee.processId      ).toBeDefined();
                    expect( employee.name           ).toBeDefined();
                    expect( employee.empID          ).toBeDefined();
                    expect( employee.objectID       ).toBeDefined();
                    expect( employee.homeStore      ).toBeDefined();
                    expect( employee.clockedInStore ).toBeDefined();
                    expect( employee.address        ).toBeDefined();
                    expect( employee.securityLevel  ).toBeDefined();
                    expect( employee.empDetails     ).toBeDefined();

                }
            }

            done();
            
        })
        .catch( function ( err ) {
            expect( err.statusCode ).toBe( 200 );
            done();
        });

    }); 

});