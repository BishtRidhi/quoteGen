var quoteText = '';
var quoteAuthor = '';
var URL = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";

// Quote on page-load
$(document).ready(function() {
  $.getJSON(URL, function(data){
    quoteText = data.quoteText;
    if (data.quoteAuthor) {
      quoteAuthor = data.quoteAuthor;
    } else {
      quoteAuthor = "Anonymous";
    }
     
    $("#quoteText").html(quoteText);
    $("#quoteAuthor").html('-' + quoteAuthor);
  });
});

// Refresh quote
$("#getQuote").on("click", function() {
  
  // Refresh animation
  $(function() {
    $("[id='refresh']").attr("class", "fa fa-refresh fa-spin");
      setTimeout(function() { $("#refresh").attr("class", "fa fa-refresh"); }, 1000);
  });
  
  $.getJSON(URL, function(data){
    setTimeout(function() {
      quoteText = data.quoteText;
      if (data.quoteAuthor) {
        quoteAuthor = data.quoteAuthor;
      } else {
        quoteAuthor = "Anonymous";
      }
    
    $("#quoteText").html(quoteText);
    $("#quoteAuthor").html('-' + quoteAuthor);
    }, 700);
  })
});    

// Generate tweet from current quote
var linkElement = document.getElementById("tweet");
    
$(linkElement).click(function(event){
  event.preventDefault();
  window.open("https://twitter.com/intent/tweet?text=" + quoteText + " -" + quoteAuthor);
});