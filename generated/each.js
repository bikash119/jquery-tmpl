
/**
 *
 * jQuery.template["tmpl"]
 *
 **/
 
jQuery.template["tmpl"]=
function anonymous(jQuery, $data, $i) {
    var $ = jQuery, T = [], asArray = arguments.length > 3 ? arguments[3] : false, partial = arguments.length > 4 ? arguments[4] : false, _ = $.tmpl.filters;
    _.data = T.data = $data;
    _.$i = T.index = $i || 0;
    T._ = null;
    function pushT(value, _this, encode) {
        return encode === false ? T.push(typeof value === "function" ? value.call(_this) : value) : T.push($.encode(typeof (value) === "function" ? value.call(_this) : value));
    }
    with ($.extend(true, {}, _, $data)) {
        try {
            T.push("\n    this template demonstrates the use of the <b>each</b> tag\n\n    <h2>Hot Wheels</h2>\n    <h3>seussical cars</h3>\n    ");
            jQuery.each(cars, function ($i) {
                with (this) {
                    T.push("\n       <p> ");
                    pushT(this, this);
                    T.push(" </p>\n    ");
                }
            });
            T.push("\n    \n    <h3>working mans ride</h3>\n    ");
            jQuery.each(trucks, function ($i) {
                with (this) {
                    T.push("\n       <p> ");
                    pushT(this, this);
                    T.push(" </p>\n    ");
                }
            });
            T.push("\n\n    <h3>my dream rides (in order of dreaminess)</h3>\n    <ul>\n    ");
            jQuery.each(classics, function ($i) {
                with (this) {
                    T.push("\n       <li> \n       my #");
                    pushT($i + 1, this);
                    T.push(" dreamiest ride would be a ");
                    pushT(year, this);
                    T.push(" ");
                    pushT(make, this);
                    T.push(" ");
                    pushT(model, this);
                    T.push("\n       </li>\n    ");
                }
            });
            T.push("\n    </ul>\n    \n    <h3>not to repeat myself but...</h3>\n    <ul>\n    ");
            jQuery.each(classics, function (favorite, dreamy) {
                with (this) {
                    T.push("\n       <li> \n       my #");
                    pushT(favorite + 1, this);
                    T.push(" dreamiest ride would be a ");
                    pushT(dreamy.year, this);
                    T.push(" ");
                    pushT(dreamy.make, this);
                    T.push(" ");
                    pushT(dreamy.model, this);
                    T.push("\n       </li>\n    ");
                }
            });
            T.push("\n    </ul>\n");
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
    return asArray ? T : T.join("");
}
