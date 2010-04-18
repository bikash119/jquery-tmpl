
/**
 *
 * jQuery.template["sometmpl1"]
 *
 **/
 
jQuery.template["sometmpl1"]=
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
            T.push("  <li>");
            pushT($i, this);
            T.push(") <a href=\"");
            pushT(url, this);
            T.push("\">");
            pushT(name, this);
            T.push("</a> (");
            pushT(cityJoin, this);
            T.push(")</li> ");
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

/**
 *
 * jQuery.template["sometmpl2"]
 *
 **/
 
jQuery.template["sometmpl2"]=
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
            T.push("     ");
            T.push("  <li>");
            pushT($i, this);
            T.push(") <a href=\"");
            pushT(url, this);
            T.push("\">");
            pushT(name, this);
            T.push("</a> Cities: ");
            jQuery.each(cities, function (i, city) {
                with (this) {
                    T.push("");
                    pushT(city, this);
                    T.push("");
                }
            });
            T.push("</li>     ");
            pushT(foo, this);
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

/**
 *
 * jQuery.template["sometmpl3"]
 *
 **/
 
jQuery.template["sometmpl3"]=
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
            T.push("     <li>Cities: ");
            pushT(join(cities, "-"), this);
            T.push("</li> ");
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

/**
 *
 * jQuery.template["sometmpl4"]
 *
 **/
 
jQuery.template["sometmpl4"]=
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
            T.push("<li>     ( Remote 3 )  <a href=\"");
            pushT(url, this);
            T.push("\">");
            pushT(name, this);
            T.push("</a> Cities:      ");
            jQuery.each(cities, function (i, city) {
                with (this) {
                    T.push("         ");
                    pushT(city, this);
                    T.push("     ");
                }
            });
            T.push(" </li> ");
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

/**
 *
 * jQuery.template["sometmpl5"]
 *
 **/
 
jQuery.template["sometmpl5"]=
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
            T.push(" <h2>Animal Sounds</h2> ");
            if (pig) {
                T.push("    <p> this is a pig, \"oink\" </p> ");
            }
            T.push("  <p>There should not be a horse here</p> ");
            if ("horse" in this) {
                T.push("    <p> this is a horse, \"neighhh\" </p> ");
            } else {
                T.push("      <p> not a horse here </p> ");
            }
            T.push("  ");
            if (pets.cat) {
                T.push("    <p> this is a cat, \"");
                pushT(pets.cat, this);
                T.push("\" </p> ");
            }
            T.push("  <p>There be a horse here</p> ");
            if (!("horse" in this)) {
                T.push("    <p> this is a horse, \"neighhh\" </p> ");
            }
            T.push("  ");
            if (!pets.bird) {
                T.push("    <p> bad pussy cat! </p> ");
            }
            T.push("  ");
            if (cow.weight < 900) {
                T.push("    <p> No sir, I dont like it! </p> ");
            } else {
                if (cow.weight == 1000) {
                    T.push("    <p> oh my, what a cow! \"");
                    pushT(cow.sound, this);
                    T.push("\"</p> ");
                } else {
                    T.push("    <p> powder toast! </p> ");
                }
            }
            T.push("  Nothing after START will print because this causes an error since lamb is not defined (unless jQuery.tmpl.debug is true, in which case you will see an error message in its place) START ");
            if (lamb) {
                T.push("    <p> the cat ate the bird! </p> ");
            }
            T.push(" END  <p>E-I-E-I-OHHHHH!</p>  <h2>you shouldn't see any else</h2> ");
            T.push("  this template demonstrates the use of the <b>each</b> tag  <h2>Hot Wheels</h2> <h3>seussical cars</h3> ");
            jQuery.each(cars, function ($i) {
                with (this) {
                    T.push("    <p> ");
                    pushT(this, this);
                    T.push(" </p> ");
                }
            });
            T.push("  <h3>working mans ride</h3> ");
            jQuery.each(trucks, function ($i) {
                with (this) {
                    T.push("    <p> ");
                    pushT(this, this);
                    T.push(" </p> ");
                }
            });
            T.push("  <h3>my dream rides (in order of dreaminess)</h3> <ul> ");
            jQuery.each(classics, function (favorite, dreamy) {
                with (this) {
                    T.push("    <li>     my #");
                    pushT(favorite + 1, this);
                    T.push(" dreamiest ride would be a ");
                    pushT(dreamy.year, this);
                    T.push(" ");
                    pushT(dreamy.make, this);
                    T.push(" ");
                    pushT(dreamy.model, this);
                    T.push("    </li> ");
                }
            });
            T.push(" </ul> ");
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
