/**
 * @author thatcher
 */

jQuery.extend(jQuery.tmplcmd,{
    extend: {
        _default: [ null, null ],
        prefix: "_.push( $('<p/>').append($('#$1').render($data)).html()  );"
    }
});

