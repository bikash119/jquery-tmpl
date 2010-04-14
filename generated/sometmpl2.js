jQuery.templates["sometmpl2"]=
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
            T.push("             ");
            T.push("             <li>");
            ($i !== undefined) ? pushT($i, this) : "";
            T.push(") <a href=\"");
            (url !== undefined) ? pushT(url, this) : "";
            T.push("\">");
            (name !== undefined) ? pushT(name, this) : "";
            T.push("</a> Cities: ");
            jQuery.each(cities, function (i, city) {
                T.push("");
                (city !== undefined) ? pushT(city, this) : "";
                T.push("");
            });
            T.push("</li>             ");
            (foo !== undefined) ? pushT(foo, this) : "";
            T.push("         ");
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
