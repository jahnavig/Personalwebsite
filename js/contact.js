$(document).ready(function(){
	$('#reasonDropdown li a').on("click",function(){

		var reason = $(this).text();
		$('#pickButton').text(reason);

	});

	$("#theCarousel").carousel();

});