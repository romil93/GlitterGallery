$(document).ready(function() {  

  // Set all fields idle
  $('input[type="email"]').addClass("idleField");  
  $('input[type="password"]').addClass("idleField");

  $('input').focus(function() {  
    console.log('focus');
    $(this).removeClass("idleField").addClass("focusField");  

      }); 

      $('input').blur(function() {  
        $(this).removeClass("focusField").addClass("idleField");  
      });
         
});  
