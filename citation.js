$(document).ready(function() {
var allquotes = $(".footnote");
var footnum = 1;

allquotes.each(function(){
	var cite = $(this).attr("rel");
		
		$(this).after("<sup><a href='#footnote"+footnum+"'>"+footnum+"</sup>");	
		$("#footnotes").append("<li id='footnote"+footnum+"'><a href='"+cite+"'>"+cite+"</a></li>");
		
		footnum++;
	});

 });