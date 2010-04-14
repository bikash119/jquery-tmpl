/**
 * @author thatcher
 */
//env-js is our simulated browser environments so we can use all of
//our favorite client side libraries and tricks.  Right now
//the html parser is too big for the rhino compiler to optimize.
var __arguments__,
    log;

load('lib/env.rhino.js');

//our command hook up allows you to easily use your html interface
//from the command line
Envjs.afterScriptLoad = {
    'lib/jquery(.){1}js': function(script){
        jQuery(document).ready(function(){
            var $ = jQuery;
                $.args = [];
            Array.prototype.push.apply($.args, __arguments__);
        });
    }
};

__arguments__ = arguments;
window.location = arguments[0];
	
