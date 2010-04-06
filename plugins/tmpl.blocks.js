/**
 * @author thatcher
 */
(function(){

    var block_scope = [];

    jQuery.extend(jQuery.tmplcmd,{

        block: {
    
            _default: [ null, null ],
            prefix: "\
                $.templates.blocks = $.templates.blocks||{};\
                if(!$.templates.blocks['$1']){\
                    _.push('<!--block-$1--><!--endblock-$1-->');\
                    $.templates.blocks['$1'] = true;\
                }\
                for(var b=0;b<_.length;b++){\
                    if(_[b].match('<!--block-$1-->')){\
                        var r = /<\!--block-$1-->.*<\!--endblock-$1-->/;\
                        _[b] = _[b].replace(r, (function(){\
                            var _ = ['<!--block-$1-->'],\
                                end = '<!--endblock-$1-->';",
            suffix:"\
                            _.push(end);\
                            return _.join(' ');\
                        })());\
                        break;\
                    };\
                }"
        }
        
    });

})();