/**
 * @author thatcher
 */

(function($){


jQuery.extend(jQuery.tmpl.tags,{
    comment: {
        _default: [ null, null ],
        prefix: "\n\
    <!--\n\
    /**\n",
        suffix:"\n\
    */;\n\
    -->"
    }
});

})(jQuery);
