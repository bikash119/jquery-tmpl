/*
 * jQuery Templating Plugin
 *   NOTE: Created for demonstration purposes.
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function(jQuery){
	// Override the DOM manipulation function
	var oldManip = jQuery.fn.domManip,
        console = ('console' in window)?window.console: {
            debug: function(){},
            info: function(){},
            error: function(){}
        };
	
	jQuery.fn.extend({
		render: function( data ) {
			return this.map(function(i, tmpl){
				return jQuery.render( tmpl, data );
			});
		},
		
		// This will allow us to do: .append( "template", dataObject )
		domManip: function( args ) {
			// This appears to be a bug in the appendTo, etc. implementation
			// it should be doing .call() instead of .apply(). See #6227
			if ( args.length > 1 && args[0].nodeType ) {
				arguments[0] = [ jQuery.makeArray(args) ];
			}

			if ( args.length === 2 && typeof args[0] === "string" && typeof args[1] !== "string" ) {
				arguments[0] = [ jQuery.render( args[0], args[1] ) ];
			}
			
			return oldManip.apply( this, arguments );
		}
	});
	
	jQuery.extend({
		render: function( tmpl, data ) {
            var fn;
            $.extend(data, jQuery.tmpl.filters);
			
			// Use a pre-defined template, if available
			if ( jQuery.templates[ tmpl ] ) {
				fn = jQuery.templates[ tmpl ];
			// We're pulling from a script node
			} else if ( tmpl.nodeType ) {
				var node = tmpl, elemData = jQuery.data( node );
				fn = elemData.tmpl || jQuery.tmpl( node.innerHTML );
			}

			fn = fn || jQuery.tmpl( tmpl );
			
			// We assume that if the template string is being passed directly
			// in the user doesn't want it cached. They can stick it in
			// jQuery.templates to cache it.

			if ( jQuery.isArray( data ) ) {
				return jQuery.map( data, function( data, i ) {
					return fn.call( data, jQuery, data, i );
				});

			} else {
				return fn.call( data, jQuery, data, 0 );
			}
		},
		
		// You can stick pre-built template functions here
		templates: {},

		encode: function( text ) {
			return text != null ? document.createTextNode( text.toString() ).nodeValue : "";
		},

		tmpl: function(str, data, i) {
			// Generate a reusable function that will serve as a template
			// generator (and which will be cached).
            
            var fn,
                fnstring = "var $=jQuery,_=[];_.data=$data;_.index=$i;" +

                // Introduce the data as local variables using with(){}
                "\nwith($data){\n\t_.push('" +

                // Convert the template into pure JavaScript
                str .replace(/([^\\])'/g,"$1\\'")
                    .replace(/[\r\t\n]/g, " ")
                    .replace(/\${([^}]*)}/g, "{{= $1}}")
                    .replace(/([^\\])?'/g,"$1\\'")//escape ' to \'
                    .replace(/{{(\/?)(\w+|.)(?:\((.*?)\))?(?: (.*?))?}}/g, function(all, slash, type, fnargs, args) {
                        var tmpl = jQuery.tmpl.tags[ type ];
                        
                        if ( !tmpl ) {
                            throw "Template not found: " + type;
                        }

                        var def = tmpl._default;

                        var result = "');" + tmpl[slash ? "suffix" : "prefix"]
                            .split("$1").join(args || def[0])
                            .split("$2").join(fnargs || def[1]) + "\n\t_.push('";
                            
                        return result;
                    })
                + "');\n}\nreturn $(_.join('')).get();";
            
            console.debug(fnstring);
            
            
            try{    
                fn = new Function("jQuery","$data","$i",fnstring );
            }catch(e){
                //a little help debugging;
                console.error(e);
                console.info(fnstring);
                fn = new Function("jQuery","$data","$i", 'return "";' );
            }

            
            // Provide some basic currying to the user
			return data ? fn.call( this, jQuery, data, i ) : fn;
		}
	});
    
    jQuery.extend(jQuery.tmpl,{
        tags:{
            /*
             * For example, someone could do:
             *   jQuery.templates.foo = jQuery.tmpl("some long templating string");
             *   $("#test").append("foo", data);
             */
            each: {
                _default: [ null, "$i" ],
                prefix: "\n\tjQuery.each($1,function($2){\n\t\twith(this){\n",
                suffix: "\n}});"
            },
            'if': {
                prefix: "if($1){",
                suffix: "}"
            },
            'else': {
                prefix: "}else{"
            },
            html: {
                prefix: "\n_.push(typeof $1==='function'?$1.call(this):$1);"
            },
            "=": {
                _default: [ "this" ],
                prefix: "\n\t_.push($.encode(typeof $1==='function'?$1.call(this):$1));"
            }
        },
        filters : {
            //default filters
            join: function(){
               return Array.prototype.join.call(arguments[0], arguments[1]);
            }
        }
    });
    
})(jQuery);
