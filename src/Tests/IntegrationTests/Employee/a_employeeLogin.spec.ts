import {} from 'jasmine';
import * as request from 'request-promise';

let config = require( '../../initConfig.json' );

describe( "Login Validation", () => {
    
    let webService : string = config.host + "employee/employeeLogin";

    it( "Expect the login process fail", ( done ) => {

        let payLoad = {
            userId          : config.employeeId,
            password        : config.employeeWrongPassword,
            clientTimestamp : config.clientTimestamp,
            locale          : null
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

            expect( response.processId             ).toBeDefined();
            expect( response.operation             ).toBeDefined();
            expect( response.responseStatus        ).toBeDefined();
            expect( response.screenName            ).toBeDefined();
            expect( response.empValidated          ).toBeDefined();
            expect( response.processID             ).toBeDefined();
            expect( response.responseMessage       ).toBeDefined();
            expect( response.errorExceptionMessage ).toBeDefined();
            expect( response.errorExceptionCode    ).toBeDefined();
            expect( response.indicator             ).toBeDefined();
            expect( response.custEzid              ).toBeDefined();
            expect( response.custObjectId          ).toBeDefined();
            expect( response.lastCDRunDate         ).toBeDefined();
            expect( response.employeeId            ).toBeDefined();
            expect( response.empObjectId           ).toBeDefined();
            expect( response.empName               ).toBeDefined();
            expect( response.objectId              ).toBeDefined();
            expect( response.locationId            ).toBeDefined();
            expect( response.exchangeRate          ).toBeDefined();
            expect( response.effectiveDate         ).toBeDefined();
            expect( response.amlLog                ).toBeDefined();
            expect( response.vendorAccessLevel     ).toBeDefined();
            expect( response.legalMandateRequired  ).toBeDefined();
            expect( response.errorExceptionMessage ).toContain( "The employee ID or password is incorrect." );  
                    
            done();

        })
        .catch( function ( err ) {
            expect( err.statusCode ).toBe( 200 );
            done();
        }); 

    });        

    it( "Expect to do login successfully", ( done ) => {

        let payLoad = {
            userId          : config.employeeId,
            password        : config.employeePassword,
            clientTimestamp : config.clientTimestamp,
            locale          : null
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
            expect( response.storeID                ).toBeDefined();
            expect( response.storeStateId           ).toBeDefined();
            expect( response.storeCountryId         ).toBeDefined();
            expect( response.storeOpenDate          ).toBeDefined();
            expect( response.fundsInVault           ).toBeDefined();
            expect( response.availableEmployee      ).toBeDefined();
            expect( response.drawerList             ).toBeDefined();
            expect( response.loginMessage           ).toBeDefined();
            expect( response.loginStatus            ).toBeDefined();
            expect( response.employeeRole           ).toBeDefined();
            expect( response.employeeEzid           ).toBeDefined();
            expect( response.isStoreOpen            ).toBeDefined();
            expect( response.environment            ).toBeDefined();
            expect( response.locale                 ).toBeDefined();
            expect( response.thermalPrinter         ).toBeDefined();
            expect( response.showStorePrompt        ).toBeDefined();
            expect( response.ipAddress              ).toBeDefined();
            expect( response.tennesseeStore         ).toBeDefined();
            expect( response.jewelerStore           ).toBeDefined();
            expect( response.floridaStore           ).toBeDefined();
            expect( response.initialStore           ).toBeDefined();
            expect( response.locationId             ).toBeDefined();
            expect( response.storeType              ).toBeDefined();
            expect( response.currencyConversionRate ).toBeDefined();
            expect( response.nedavaStore            ).toBeDefined();
            expect( response.localdev               ).toBeDefined();
            expect( response.localstoreid           ).toBeDefined();
            expect( response.serverName             ).toBeDefined();
            expect( response.serverIp               ).toBeDefined();
            expect( response.manager                ).toBeDefined();

            expect( response.response.processId             ).toBeDefined();
            expect( response.response.operation             ).toBeDefined();
            expect( response.response.responseStatus        ).toBeDefined();
            expect( response.response.screenName            ).toBeDefined();
            expect( response.response.empValidated          ).toBeDefined();
            expect( response.response.processID             ).toBeDefined();
            expect( response.response.responseMessage       ).toBeDefined();
            expect( response.response.errorExceptionMessage ).toBeDefined();
            expect( response.response.errorExceptionCode    ).toBeDefined();
            expect( response.response.indicator             ).toBeDefined();
            expect( response.response.custEzid              ).toBeDefined();
            expect( response.response.custObjectId          ).toBeDefined();
            expect( response.response.lastCDRunDate         ).toBeDefined();
            expect( response.response.employeeId            ).toBeDefined();
            expect( response.response.empObjectId           ).toBeDefined();
            expect( response.response.empName               ).toBeDefined();
            expect( response.response.objectId              ).toBeDefined();
            expect( response.response.locationId            ).toBeDefined();
            expect( response.response.exchangeRate          ).toBeDefined();
            expect( response.response.effectiveDate         ).toBeDefined();
            expect( response.response.amlLog                ).toBeDefined();
            expect( response.response.vendorAccessLevel     ).toBeDefined();
            expect( response.response.legalMandateRequired  ).toBeDefined();

            expect( response.loginMessage ).toContain( "Successfully logged in" );    

            done();

        })
        .catch( function ( err ) {
            expect( err.statusCode ).toBe( 200 );
            done();
        });                

    });

});