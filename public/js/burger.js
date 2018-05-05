var orm = require("../config/orm");

$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var nowEaten = $(this).data("nowEat");

    var newEatenState = {
      devoured: nowEaten
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        console.log("changed eaten to", nowEaten);
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


module.exports = burger;