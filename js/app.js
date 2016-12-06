  //post to api

  // Question: What does this code do?
    $("#addBtn").on("click", function() {
      var newTable = {
        name: $("#name").val().trim(),
        phone: $("#number").val().trim(),
        email: $("#email").val().trim(),
        uniqueID: $("#uniqueID").val().trim()
      };

      // Question: What does this code do??
      $.post("http://localhost:3000/api/newtable", newTable)
      .done(function(data) {
        console.log(data);
        alert("Your reservation has been placed");
      });

      return false;
    });



    //get from api
    $.ajax({
          url: "/api/newtable",
          context: document.body
        }).done(function() {
          $( this ).addClass( "done" );
        });