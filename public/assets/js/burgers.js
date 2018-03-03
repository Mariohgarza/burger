//Make sure we wait to attach our handlers until the DOM is fully loaded.
 $(function() {
   $(".devourit").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data("newBurger");

    var newBurgerStat = {
      devoured: newBurger
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerStat
    }).then(
      function() {
        console.log("create burger ", newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
      console.log("created new burger");
    var newBurger = {
    burger_name: $("#bu").val().trim(),
      devoured: false
    };

    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }, function(){
          console.log("failed to create burger");
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }, function(){
        $.ajax("/api/burgers/" + id, {
          type: "DELETE",
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      }
    );
  
  });
});
