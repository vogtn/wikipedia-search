$("#search").keyup(function(e) {
  var q = $("#search").val();
  $.getJSON("http://en.wikipedia.org/w/api.php?callback=?", {
      srsearch: q,
      action: "query",
      list: "search",
      format: "json"
    },
    function(data) {
      $("#results").empty();
      $("#results").append("<b>" +  q + "</b>");
      $.each(data.query.search, function(i, item) {
        $("#results").append("<div><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'>" + item.title + "</a>"+ "<br />" + item.snippet  + "</div>");
      });
    });
});
function popup(url) {
	newwindow=window.open("https://en.wikipedia.org/wiki/Special:Random",'wiki','height=600,width=800');
}