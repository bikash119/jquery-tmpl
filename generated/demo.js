
/**
 *
 * jQuery.template["sometmpl1"]
 *
 **/
 
jQuery.template["sometmpl1"]=
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
            T.push("\n\t<li>");
            pushT($i, this);
            T.push(") <a href=\"");
            pushT(url, this);
            T.push("\">");
            pushT(name, this);
            T.push("</a> (");
            pushT(cityJoin, this);
            T.push(")</li>\n");
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

/**
 *
 * jQuery.template["sometmpl2"]
 *
 **/
 
jQuery.template["sometmpl2"]=
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
            T.push("\n    ");
            T.push("\n\t<li>");
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
            T.push("</li>\n    ");
            pushT(foo, this);
            T.push("\n");
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

/**
 *
 * jQuery.template["sometmpl3"]
 *
 **/
 
jQuery.template["sometmpl3"]=
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
            T.push("\n    <li>Cities: ");
            pushT(join(cities, " --- "), this);
            T.push("</li>\n");
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

/**
 *
 * jQuery.template["sometmpl4"]
 *
 **/
 
jQuery.template["sometmpl4"]=
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
            T.push("<li>\n    ( Remote 3 )  <a href=\"");
            pushT(url, this);
            T.push("\">");
            pushT(name, this);
            T.push("</a> Cities: \n    ");
            jQuery.each(cities, function (i, city) {
                with (this) {
                    T.push("\n        ");
                    pushT(city, this);
                    T.push("\n    ");
                }
            });
            T.push("\n</li>\n");
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

/**
 *
 * jQuery.template["sometmpl5"]
 *
 **/
 
jQuery.template["sometmpl5"]=
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
            T.push("\n<h2>Animal Sounds</h2>\n");
            if (pig) {
                T.push("\n   <p> this is a pig, \"oink\" </p>\n");
            }
            T.push("\n\n<p>There should not be a horse here</p>\n");
            if ("horse" in this) {
                T.push("\n   <p> this is a horse, \"neighhh\" </p>\n");
            } else {
                T.push("  \n   <p> not a horse here </p>\n");
            }
            T.push("\n\n");
            if (pets.cat) {
                T.push("\n   <p> this is a cat, \"");
                pushT(pets.cat, this);
                T.push("\" </p>\n");
            }
            T.push("\n\n<p>There be a horse here</p>\n");
            if (!("horse" in this)) {
                T.push("\n   <p> this is a horse, \"neighhh\" </p>\n");
            }
            T.push("\n\n");
            if (!pets.bird) {
                T.push("\n   <p> bad pussy cat! </p>\n");
            }
            T.push("\n\n");
            if (cow.weight < 900) {
                T.push("\n   <p> No sir, I dont like it! </p>\n");
            } else {
                if (cow.weight == 1000) {
                    T.push("\n   <p> oh my, what a cow! \"");
                    pushT(cow.sound, this);
                    T.push("\"</p>\n");
                } else {
                    T.push("\n   <p> powder toast! </p>\n");
                }
            }
            T.push("\n\nNothing after START will print because this causes an error\nsince lamb is not defined (unless jQuery.tmpl.debug is true,\nin which case you will see an error message in its place)\nSTART\n");
            if (lamb) {
                T.push("\n   <p> the cat ate the bird! </p>\n");
            }
            T.push("\nEND\n\n<p>E-I-E-I-OHHHHH!</p>\n\n<h2>you shouldn't see any else</h2>\n");
            T.push("\n\nthis template demonstrates the use of the <b>each</b> tag\n\n<h2>Hot Wheels</h2>\n<h3>seussical cars</h3>\n");
            jQuery.each(cars, function ($i) {
                with (this) {
                    T.push("\n   <p> ");
                    pushT(this, this);
                    T.push(" </p>\n");
                }
            });
            T.push("\n\n<h3>working mans ride</h3>\n");
            jQuery.each(trucks, function ($i) {
                with (this) {
                    T.push("\n   <p> ");
                    pushT(this, this);
                    T.push(" </p>\n");
                }
            });
            T.push("\n\n<h3>my dream rides (in order of dreaminess)</h3>\n<ul>\n");
            jQuery.each(classics, function (favorite, dreamy) {
                with (this) {
                    T.push("\n   <li> \n   my #");
                    pushT(favorite + 1, this);
                    T.push(" dreamiest ride would be a ");
                    pushT(dreamy.year, this);
                    T.push(" ");
                    pushT(dreamy.make, this);
                    T.push(" ");
                    pushT(dreamy.model, this);
                    T.push("\n   </li>\n");
                }
            });
            T.push("\n</ul>\n");
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
