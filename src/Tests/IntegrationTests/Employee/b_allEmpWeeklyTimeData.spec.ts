import {} from 'jasmine';
import * as request from 'request-promise';

let config = require( '../../initConfig.json' );

describe( "Get the employees weekly time data", () => {

    let webService : string = config.host + "employee/allEmpWeeklyTimeData";

    beforeEach( ( done ) => {

        let webServiceRetriveStore : string = config.host + "store/retrieveStore";

        let payLoad = {
            storeId : config.storeId
        };
        
        let options = {
            method : 'POST',
            body   :  payLoad,
            uri    :  webServiceRetriveStore,
            json   :  true,
            jar    :  true
        };

        request( options )
        .then( function ( response ) {

            done();

        })
        .catch( function ( err ) {

            done();
            
        });

    });

    it( "Expect to find employees records", ( done ) => {

        let payLoad = {
            endDate : config.dateForFindingEmployees
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

            expect( response.processId              ).toBeDefined();
            expect( response.weekEndingdates        ).toBeDefined();
            expect( response.timeVerificationList   ).toBeDefined();
            expect( response.employeeAuthentication ).toBeDefined();
            expect( response.onlyTimeVerify         ).toBeDefined();
            expect( response.weekEndDate            ).toBeDefined();
            expect( response.previousWeekVerified   ).toBeDefined();

            for( let record of response.timeVerificationList ){
                    
                expect( record.processId ).toBeDefined();
                expect( record.employee  ).toBeDefined();
                expect( record.days      ).toBeDefined();

                for( let employee of record.employee ){

                    expect( employee.processId        ).toBeDefined();
                    expect( employee.objectID         ).toBeDefined();
                    expect( employee.employeeID       ).toBeDefined();
                    expect( employee.employeeName     ).toBeDefined();
                    expect( employee.totalWeeklyhours ).toBeDefined();
                    expect( employee.approver         ).toBeDefined();
                    expect( employee.currentDrawer    ).toBeDefined();
                    expect( employee.nextDrawer       ).toBeDefined();
                    expect( employee.empObjectId      ).toBeDefined();
                    expect( employee.keyHolder        ).toBeDefined();
                    expect( employee.isExternal       ).toBeDefined();
                    expect( employee.workForceMessage ).toBeDefined();
                    expect( employee.drawerNumber     ).toBeDefined();                                      

                }

                for( let day of record.days ){
                    expect( day.processId  ).toBeDefined();
                    expect( day.totalHours ).toBeDefined();
                    expect( day.dayName    ).toBeDefined();
                    expect( day.additional ).toBeDefined();
                    expect( day.date       ).toBeDefined();  
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