/**
 * @author thatcher
 */

(function($){


jQuery.extend(jQuery.tmpl.tags,{
    extend: {
        _default: [ null, null ],
        prefix: "\n\
    if('$1'.match('#')){\n\
        if(!('$1' in $.templates)){\n\
            /*pre-compile template*/\n\
            $.templates['$1'] = $.tmpl($('$1').text());\n\
        }\n\
    }else{\n\
        if(!('$1' in $.templates)){\n\
            $.ajax({\n\
                url:'$1',\n\
                type:'GET',\n\
                dataType:'text',\n\
                async:false,\n\
                success:function(text){\n\
                    $.templates['$1'] = $.tmpl(text);\n\
                },\n\
                error:function(xhr, status, e){\n\
                    $.templates['$1'] = $.tmpl('<p>url failed to load: $1 <p>');\n\
                }\n\
            });\n\
        }\n\
    }\n\
    /*finally render using outer-html hack*/\n\
    T.push($('<p/>').append( $.render('$1', $data) ).html());\n\
    "
    }
});

})(jQuery);
