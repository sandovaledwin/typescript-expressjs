$( document ).ready( function() {

    $( "#jsonForm" ).submit(function( event ) {
        
        var input       = $( "#jsonForm textarea" ).val();
        var elements    = $.parseJSON( input );
        var output      = "";
        var beginExpect = "expect( response.";
        var endExpect   = " ).toBeDefined();";
        var format      = $( "#jsonForm input" ).prop( "checked" );
        
        if( elements ){

            $( ".output" ).show();

            if( format ){

                generateSwaggerFormat( elements );

            }else{

                generateJasminValidation( "response", elements );

            }

            $( ".output textarea" ).val( output );

        }

        function generateSwaggerFormat( elements ){

            var objName    = "";
            var objType    = "";
            var objExample = "";

            for( key in elements ){

                var subElement = elements[ key ];

                if( typeof subElement == 'object' && 
                    typeof subElement != 'string' &&
                    subElement   ){

                    if( typeof subElement == 'object' ){

                        output = output + 
                                 key + "\n" + "\t" +
                                "type: object \n" + "\t" +
                                "properties: \n";                           

                    }

                    generateSwaggerFormat( subElement );

                }else{

                    objName    = key + ":";
                    objType    = typeof subElement;
                    objExample = subElement;    

                    if( objType == "string" ){
                        objExample = '"' + subElement + '"'; 
                    }                

                    if( !subElement ){
                        objType    = "string";
                        objExample = '"null"';
                    }

                    output = output + 
                             objName + "\n" + "\t" +
                             "type: "    + objType    + "\n" + "\t" +
                             "example: " + objExample + "\n";                            

                }

            }            
            
        }

        function generateJasminValidation( baseElement, elements ){

            var beginExpect = "expect( ";
            var endExpect   = " ).toBeDefined();";

            for( key in elements ){

                var subElement = elements[ key ];

                if( typeof subElement == 'object' && 
                    typeof subElement != 'string' &&
                    subElement   ){

                    var newBaseElement = baseElement + "." + key;

                    generateJasminValidation( newBaseElement, subElement );

                }else{

                    output = output + 
                             beginExpect + 
                                baseElement + "." + key + 
                             endExpect + "\n";                            

                }

            }
            

        }
        
        event.preventDefault();
    
    });

});