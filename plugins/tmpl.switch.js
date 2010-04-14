/**
 * @author thatcher
 */
(function(){

    jQuery.extend(jQuery.tmpl.tags,{

"switch": {
    _default: [ null, null ],
    prefix: "\n\
        switch( $1 ){",
    suffix:"\n\
        }"
        
},
//closed cases fall through, other wise they continue
"case": {
    _default: [ null, null ],
    prefix: "\n\
        case $1 :",
    suffix: "\n\
            break;"
        
        
},
//still provide a default and make it
"default": {
    _default: [ null, null ],
    prefix: "\n\
        default:",
    suffix:"\n\
            break;"
        
}

    });

})();