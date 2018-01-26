$(function () {
     $("#getQuote").on("click", function (stringified) {
  //  $(document).on("click", function(event){
        // The city variable will hold the results we get from the user's inputs via HTML
        var city = $("#userInput").val();
         var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=music&city=";
        getQuote();
// AJAX call ----

        function getQuote() {
        $.get(queryURL + city + "&apikey=RAJIFQErgEgMNdIAtVrRj7Z6bAWPY0cl", function (data, status) {
        //    $('#well-section').text(data);
            
            console.log(data);
            console.log(data._embedded.events[0].name);
            console.log(data._embedded.events.length);
            for (var i = 0; i < data._embedded.events.length; i++) {

                var obj = data._embedded.events[i];
              console.log(obj);
             console.log(obj.name);
                var div = $("<div>"); // Create a div
                div.html(obj.name);
                $("#well-section").append(div); 
            
        }
    })
}
    })
    })
        

    

        
      //  var stringified = $("#well-section").text(JSON.stringify(json)); 
    
        // .data() = Store arbitrary data associated with the matched elements or return the value
        // at the named data store for the first element in the set of matched elements.


    
     //   $("#well-section").text(json);
            // for loop for json results
        //   for (var i=0; i < json.length; i++) {
               


 

         
        
