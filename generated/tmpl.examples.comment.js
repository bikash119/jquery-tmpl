
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
    function pushT(value, _this) {
        return T.push($.encode(typeof (value) === "function" ? value.call(_this) : value));
    }
    with ($.extend($data, _)) {
        try {
            T.push("          <h2>you shouldn't see any else</h2>     ");
            T.push(" ");
        }
        catch (e) {
            if ($.tmpl.debug) {
                T.push("<p>" + e + "</p>");
            } else {
                T.push("");
            }
        }
    }
    _.data = null;
    return $($("<div>" + T.join("\n") + "</div>")[0].childNodes).get();
}
