$(document).ready
      (
        function()
        {
          $('.labelMenu').click
          (
            function()
            {
               $('.menu').css('left', 0);
               $('.opacMenu').fadeIn();
            }
          )
          
          $('.opacMenu').click
          (
            function()
            {
               $('.menu').css('left', '-205px');
               $('.opacMenu').fadeOut();
            }
          )
        }
      )