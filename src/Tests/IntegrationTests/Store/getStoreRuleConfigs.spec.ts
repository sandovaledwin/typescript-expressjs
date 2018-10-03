import {} from 'jasmine';
import * as request from 'request-promise';

let config = require( '../../initConfig.json' );

describe( "Store Rules Configs", () => {

    let webService : string = config.host + "store/getStoreRuleConfigs";   

    it( "Expect to get all the store rules for an specific store", ( done ) => {

        let options = {
            uri    :  webService,
            json   :  true,
            jar    :  true
        };

        request( options )
        .then( function ( response ) {
            
            expect( response.processId                                ).toBeDefined();
            expect( response.requiresCustomerPicturesForINStore       ).toBeDefined();
            expect( response.requiresCustomerProfilePicture           ).toBeDefined();
            expect( response.requiresCustomerPictures                 ).toBeDefined();
            expect( response.gunReqAttrs                              ).toBeDefined();
            expect( response.loanReqAttrs                             ).toBeDefined();
            expect( response.purchaseReqAttrs                         ).toBeDefined();
            expect( response.saleReqAttrs                             ).toBeDefined();
            expect( response.saleReqAttrsNoTax                        ).toBeDefined();
            expect( response.requiresCustomerPicturesPerLoan          ).toBeDefined();
            expect( response.requiresCustomerPicturesPerPurchase      ).toBeDefined();
            expect( response.requiresCustomerProfilePciture           ).toBeDefined();
            expect( response.picturesEnabled                          ).toBeDefined();
            expect( response.pictureResolution                        ).toBeDefined();
            expect( response.itemPicturesRequired                     ).toBeDefined();
            expect( response.itemPicturesPerTransType                 ).toBeDefined();
            expect( response.itemPicturesPerItemCategory              ).toBeDefined();
            expect( response.enableItemPictures                       ).toBeDefined();
            expect( response.enableFingerPrint                        ).toBeDefined();
            expect( response.enableESigForLoanAndPurchaseTransactions ).toBeDefined();
            expect( response.customerPicturesPerItemCategory   ).toBeDefined();
            expect( response.gunReqAttrSequence                ).toBeDefined();
            expect( response.loanReqAttrSequence               ).toBeDefined();
            expect( response.purchaseReqAttrSequence           ).toBeDefined();
            expect( response.saleReqAttrSequence               ).toBeDefined();
            expect( response.saleNoTaxReqAttrSequence          ).toBeDefined();
            expect( response.allowsLessThan30dayExtensions     ).toBeDefined();
            expect( response.extendable                        ).toBeDefined();
            expect( response.extensionLostTicketFee            ).toBeDefined();
            expect( response.loanHoldDays                      ).toBeDefined();
            expect( response.loanPaymentsTaxable               ).toBeDefined();
            expect( response.lostTicketFee                     ).toBeDefined();
            expect( response.lostTicketFeePercent              ).toBeDefined();
            expect( response.enableClearanceLabel              ).toBeDefined();
            expect( response.enableLoanItemUpdate              ).toBeDefined();
            expect( response.expireMonth                       ).toBeDefined();
            expect( response.flexibleLoanTerm                  ).toBeDefined();
            expect( response.maxLppAllowed                     ).toBeDefined();
            expect( response.requireNoticeOfIntent             ).toBeDefined();
            expect( response.requiresDisplayMinorK             ).toBeDefined();
            expect( response.txtOptInMsgReq                    ).toBeDefined();
            expect( response.enableLoanProtection              ).toBeDefined();
            expect( response.requiresForeignTradeManifestoForm ).toBeDefined();
            expect( response.requiresPoliceReceipt          ).toBeDefined();
            expect( response.transactionPictureAtEnd        ).toBeDefined();
            expect( response.enableCNEProtection            ).toBeDefined();
            expect( response.enableAmazon                   ).toBeDefined();
            expect( response.enableBuyOptions               ).toBeDefined();
            expect( response.pdEmail                        ).toBeDefined();
            expect( response.requiresDVDDescription         ).toBeDefined();
            expect( response.requiresHiddenQBI              ).toBeDefined();
            expect( response.workForceManagement            ).toBeDefined();
            expect( response.requiresCustomerNameForSale    ).toBeDefined();
            expect( response.checkLimit                     ).toBeDefined();
            expect( response.creditLimit                    ).toBeDefined();
            expect( response.restrictOutOfStateFirearmTrans ).toBeDefined();
            expect( response.cashIntakeThreshHold           ).toBeDefined();
            expect( response.cashIntakeThreshHoldForJewelry ).toBeDefined();
            expect( response.cashIntakeThreshHoldForAuto    ).toBeDefined();
            expect( response.mleApprovedAmount               ).toBeDefined();
            expect( response.rdoApprovedAmount               ).toBeDefined();
            expect( response.enableThermalPrinter            ).toBeDefined();
            expect( response.enableEbay                      ).toBeDefined();
            expect( response.enablePromotions                ).toBeDefined();
            expect( response.enableCashLoad                  ).toBeDefined();
            expect( response.maximumAmountFinanced           ).toBeDefined();
            expect( response.txtReminderTwo                  ).toBeDefined();
            expect( response.txtReminderOne                  ).toBeDefined();
            expect( response.reminderTwo                     ).toBeDefined();
            expect( response.reminderThree                   ).toBeDefined();
            expect( response.enableVendorPurchase            ).toBeDefined();
            expect( response.enableAreaMgrTimeVerificationMx ).toBeDefined();
            expect( response.stateTax                  ).toBeDefined();
            expect( response.appraisalDistrict         ).toBeDefined();
            expect( response.moneyOrderCashingFee      ).toBeDefined();
            expect( response.enableWebServiceCall      ).toBeDefined();
            expect( response.itemUpdatePriceLimit      ).toBeDefined();
            expect( response.dPServiceVersion          ).toBeDefined();
            expect( response.gunRule                   ).toBeDefined();
            expect( response.txtReminderThree          ).toBeDefined();
            expect( response.loadDebitCard             ).toBeDefined();
            expect( response.cash_Load_Fee             ).toBeDefined();
            expect( response.thresholdAmountGM         ).toBeDefined();
            expect( response.thresholdAmountAuto       ).toBeDefined();
            expect( response.thresholdAmountCashIntake ).toBeDefined();
            expect( response.thresholdAmountSaleLyGM   ).toBeDefined();
            expect( response.reminderOne               ).toBeDefined();
            expect( response.minimumLongGunAge         ).toBeDefined();
            expect( response.requiresExternalReports   ).toBeDefined();
            expect( response.priceDistrict             ).toBeDefined();
            expect( response.thresholdAmountJewelry    ).toBeDefined();
            expect( response.auditScanner              ).toBeDefined();
            expect( response.enableHyperCom            ).toBeDefined();
            expect( response.sequenceRequired          ).toBeDefined();
            expect( response.formsList                 ).toBeDefined();
            expect( response.originalPriceChangeDays   ).toBeDefined();
            expect( response.voidFirearmWaitTime       ).toBeDefined();
            expect( response.feeDistrict               ).toBeDefined();
            expect( response.purchaseHold              ).toBeDefined();
            expect( response.cemRequired               ).toBeDefined();
            expect( response.countyTax                 ).toBeDefined();
            expect( response.minimumHandgunAge         ).toBeDefined();
            expect( response.cityTax                   ).toBeDefined();
            expect( response.returnFeeForChecks        ).toBeDefined();
            expect( response.mtaTax                    ).toBeDefined();
            expect( response.minAmountFinanced         ).toBeDefined();
            expect( response.thresholdAmountSaleLyAuto ).toBeDefined();
            expect( response.maximum_LPP_Allowed       ).toBeDefined();
            expect( response.allows_PayDown            ).toBeDefined();
            expect( response.enableGSMService          ).toBeDefined();
            expect( response.gsmExemptRestrict         ).toBeDefined();
            expect( response.pppTaxable                ).toBeDefined();
            expect( response.pppStore                  ).toBeDefined();        
            done();
        })
        .catch( function ( err ) {
            expect( err.statusCode ).toBe( 200 );
            done();
        });                    
                
    });

});