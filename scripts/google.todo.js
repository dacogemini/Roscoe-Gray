$(function () {
    $(document).on("click", function(event){
        // The city variable will hold the results we get from the user's inputs via HTML
        var city = $("#userInput").val();
       

    
        var queryURL = "http://api.yelp.com/v3/businesses/search"  
// AJAX call ----
    $.ajax({
        type: "GET",
        url: queryURL + city + "jaufNOIjR8JLdRCJ1BkcTcM8HPbBoZqai5hy--t9zenkpcl2ClF6n282G15ZiNUwI2nSk2Gqr5qPd4IVh0DiLk35coJ8FMnQ8-livtVler2xIiYluR0sh5rooilkWnYx",
        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json);
        
        $("#well-section").text(JSON.stringify(json)); 
            // for loop for json results
           for (var i=0; i < json.length; i++) {
               
           }  
          
        },
            error: function (xhr, status, err) {
            // This time, we do not end up here!
            
            }
        });
    })
})