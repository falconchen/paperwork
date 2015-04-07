angular.module('paperworkNotes').factory('StatusNotifications', function() {
    
    var StatusNotificationService = {};
    
    StatusNotificationService.sendStatusFeedback = function(type, message) {
      console.log("test");
      console.log(type); 
      
      var notificationDiv = document.getElementById("status_feedback");
      console.log(notificationDiv);
      
      // Include content in notification 
      notificationDiv.children[0].innerHTML = message;
      
      //Add type class to notification  
      notificationDiv.classList.add(type + "_status_feedback");
      
      //Remove hidden class from notification  
      notificationDiv.classList.remove("hidden");
      
      // Get height of div to set top margin for following elements
      var notificationDivHeight = notificationDiv.offsetHeight;
      
      // Add top margin to all sidebar elements
      var sidebarElements = document.getElementsByClassName("sidebar");
      for (var i = 0; i < sidebarElements.length; i++) {
          sidebarElements[i].style.marginTop += (notificationDivHeight + "px");
      }
      
      // Add top margin to 'Collapse sidebar' button and paperworkViewParent
      document.getElementById("paperworkViewParent").style.marginTop += (notificationDivHeight + "px");
      document.getElementsByClassName("sidebar-collapse-switch")[0].style.marginTop += (notificationDivHeight + 5 + "px");
      
      // Hide after 5 seconds
      window.onload = function() {
          setTimeout(function() {
              notificationDiv.classList.add("hidden");
              
              // Remove top margin from all elements 
              for (i = 0; i < sidebarElements.length; i++) {
                  sidebarElements[i].style.marginTop = parseInt(sidebarElements[i].style.marginTop, 10) - notificationDivHeight;
              }
              document.getElementById("paperworkViewParent").style.marginTop = parseInt(document.getElementById("paperworkViewParent").style.marginTop, 10) - notificationDivHeight;
              document.getElementsByClassName("sidebar-collapse-switch")[0].style.marginTop = parseInt(document.getElementsByClassName("sidebar-collapse-switch")[0].style.marginTop, 10) - (notificationDivHeight + 5);
      
          }, 5000);
      };
    };
    
    return StatusNotificationService;
});