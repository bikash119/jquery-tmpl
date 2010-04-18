
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
            T.push("     this template demonstrates the use of the <b>each</b> tag      <h2>Hot Wheels</h2>     <h3>seussical cars</h3>     ");
            jQuery.each(cars, function ($i) {
                with (this) {
                    T.push("        <p> ");
                    pushT(this, this);
                    T.push(" </p>     ");
                }
            });
            T.push("          <h3>working mans ride</h3>     ");
            jQuery.each(trucks, function ($i) {
                with (this) {
                    T.push("        <p> ");
                    pushT(this, this);
                    T.push(" </p>     ");
                }
            });
            T.push("      <h3>my dream rides (in order of dreaminess)</h3>     <ul>     ");
            jQuery.each(classics, function ($i) {
                with (this) {
                    T.push("        <li>         my #");
                    pushT($i + 1, this);
                    T.push(" dreamiest ride would be a ");
                    pushT(year, this);
                    T.push(" ");
                    pushT(make, this);
                    T.push(" ");
                    pushT(model, this);
                    T.push("        </li>     ");
                }
            });
            T.push("     </ul>          <h3>not to repeat myself but...</h3>     <ul>     ");
            jQuery.each(classics, function (favorite, dreamy) {
                with (this) {
                    T.push("        <li>         my #");
                    pushT(favorite + 1, this);
                    T.push(" dreamiest ride would be a ");
                    pushT(dreamy.year, this);
                    T.push(" ");
                    pushT(dreamy.make, this);
                    T.push(" ");
                    pushT(dreamy.model, this);
                    T.push("        </li>     ");
                }
            });
            T.push("     </ul> ");
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
