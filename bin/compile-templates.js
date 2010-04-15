/**
 * @author thatcher
 */
//env-js is our simulated browser environments so we can use all of
//our favorite client side libraries and tricks.  Right now
//the html parser is too big for the rhino compiler to optimize.
var __arguments__,
    log;

load('lib/env.rhino.js');

//allow Env to load javascript
Envjs.scriptTypes['text/javascript'] = true;

// our command hook up allows you to easily use your html interface
// from the command line
Envjs.afterScriptLoad = {
    'lib/jquery(.){1}js': function(script){
        
        // save the command-line arguments
        jQuery.args = [];
        Array.prototype.push.apply(jQuery.args, __arguments__);
        
        jQuery(function($){
                        
            var fileName = $.args.length>1 ? $.args[1] : 'generated_templates.js',
                compiled = '';
            
            $('script[type=text/html]').each(function(){
                var id = $(this).attr('id');
                console.log('compiling %s', id);
                if(this.src){
                    $.ajax({
                        async:false,
                        url: this.src,
                        type:'text',
                        success: function(text){
                            $.templates[id] = $.tmpl( text );
                        }
                    });
                }else{
                    $.templates[id] = $.tmpl( $(this).text() );
                }
                compiled += '\n\
/**\n\
 *\n\
 * jQuery.template["'+id+'"]\n\
 *\n\
 **/\n\
 \n' + 
                'jQuery.template["'+id+'"]='+ $.templates[id].toString();
            });
            
            $.ajax({
                url: fileName,
                async: false,
                type: 'PUT',
                data: compiled,
                processData: false,
                success: function(){
                    console.log('saved ', fileName);
                }
            });
        
        });
    }
};


__arguments__ = arguments;
window.location = arguments[0];
	
