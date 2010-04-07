/**
 * @author thatcher
 */
(function(){

    var block_scope = [];

    jQuery.extend(jQuery.tmpl.tags,{

        block: {
    
            _default: [ null, null ],
            prefix: "\n\
    $.templates.blocks = $.templates.blocks||{};\n\
    if(!$.templates.blocks['$1']){\n\
        T.push('<!--block-$1--><!--endblock-$1-->');\n\
        $.templates.blocks['$1'] = true;\n\
    }\n\
    for(var b=0;b<_.length;b++){\n\
        if(T[b].match('<!--block-$1-->')){\n\
            var r = /<\!--block-$1-->.*<\!--endblock-$1-->/;\n\
            T[b] = T[b].replace(r, (function(){\n\
                var T = ['<!--block-$1-->'],\n\
                    end = '<!--endblock-$1-->';",
            suffix:"\n\
                T.push(end);\n\
                return T.join(' ');\n\
            })());\n\
            break;\n\
        };\n\
    }"
        }
        
    });

})();