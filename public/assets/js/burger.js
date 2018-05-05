// var orm = require("../config/orm");

$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newDevour");

    var newDevourState = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed eaten to", newDevour);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#burger-input").val().trim(),
      devoured: false
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});


// module.exports = burger;