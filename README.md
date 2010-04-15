A jQuery templating plugin - created for demonstration purposes.

    $("#sometmpl1")
        .render( dataObject ) // Returns a LI with all the data filled in
        .appendTo("ul");

    $("#sometmpl1")
        .render( arrayOfDataObjects ) // Returns multiple LIs with data filled in
        .appendTo("ul");

    $("#sometmpl2")
        .render( arrayOfDataObjects ) // Returns multiple LIs with data filled in
        .appendTo("ul");
            
    
    // Appends one LI, filled with data, into the UL
    $("ul").append( tmpl, dataObject );

    // Appends multiple LI, filled with data, into the UL
    $("ul").append( tmpl, arrayOfDataObjects );
    
    
    $("#sometmpl3")
        .render( dataObject ) // Returns a LI with all the data filled in
        .appendTo("ul");
        
       
    // renders asyncronously via remote templates (still cached)
    $.render({
        url: 'examples/templates/remote1.html',
        templateData: dataObject, 
        success: function(rendered){
            $('ul').append(rendered);
        }
    });
    
    // renders syncronously via remote templates (still cached)
    $('ul').append( $.render({
        async:false,
        url: 'examples/templates/remote2.html',
        templateData: dataObject
    }) );
    
    $("#sometmpl4")
        .render( dataObject ) // Returns a LI with all the data filled in
        .appendTo("ul");
        
Compiling templates with Envjs

    > ./bin/manage.sh compile-templates /path/to/jquery-tmpl/examples/comment.html /path/to/generated/tmpl.examples.comment.js
    
