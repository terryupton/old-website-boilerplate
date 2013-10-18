    $(function() {
        if (!Modernizr.svg) {
          $(".logo").attr('src', function(index, attr) {
            return attr.replace('svg', 'png');
          });
        }
    });