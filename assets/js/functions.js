    $(function() {
        if (!Modernizr.svg) {
          $(".logo").attr('src', function(index, attr) {
            return attr.replace('svg', 'png');
          });
        }
    });


//Save the orphans - Westley Knight
//https://github.com/meteoracle/SaveTheOrphans
$(document).ready(function(){

    $("p").savetheorphans({
        orphansToSave: 1
    });

});

