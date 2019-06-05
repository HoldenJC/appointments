$(document).ready(function() {
  $("#appointments").submit(function(event) {

    //Commented out code below appends a name to a letter after user adds it. Maybe use later.

    //   var userInput = $("input#userName").val();
    // $(".userName").append(userInput);

    $("#successMessage").show();
    $("#appointments").hide();
      event.preventDefault();
  });
});
