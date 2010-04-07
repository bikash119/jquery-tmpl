/**
 * @author thatcher
 */

(function($){


jQuery.extend(jQuery.tmplcmd,{
    extend: {
        _default: [ null, null ],
        prefix: "\
            var _t;\
            if('$1'.match('#')){\
                \if(!('$1' in $.templates)){\
                    /*pre-compile template*/\
                    $.templates['$1'] = $.tmpl($('$1').text());\
                }\
            }else{\
                if(!('$1' in $.templates)){\
                    $.ajax({\
                        url:'$1',\
                        type:'GET',\
                        dataType:'text',\
                        async:false,\
                        success:function(text){\
                            $.templates['$1'] = $.tmpl(text);\
                        },\
                        error:function(xhr, status, e){\
                            $.templates['$1'] = $.tmpl('<p>url failed to load: $1 <p>');\
                        }\
                    });\
                }\
            }\
            /*finally render using outer-html hack*/\
            _.push($('<p/>').append( $.render('$1', $data) ).html());\
            "
    }
});

})(jQuery);
