
/**
 *
 * jQuery.template["tmpl"]
 *
 **/
 
jQuery.template["tmpl"]=
function anonymous(jQuery, $data, $i) {
    var $ = jQuery, T = [], _ = $.tmpl.filters;
    _.data = T.data = $data;
    _.$i = T.index = $i || 0;
    T._ = null;
    function pushT(value, _this, encode) {
        return encode === false ? T.push(typeof value === "function" ? value.call(_this) : value) : T.push($.encode(typeof (value) === "function" ? value.call(_this) : value));
    }
    with ($.extend($data, _)) {
        try {
            T.push("          <h2>you shouldn't see anything else</h2>     ");
            T.push(" ");
        }
        catch (e) {
            if ($.tmpl.debug) {
                T.push(" " + e + " ");
            } else {
                T.push("");
            }
        }
    }
    _.data = null;
    return T.join("\n");
}
