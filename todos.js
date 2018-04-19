$("ul").on("click", "li" , function(){
	$(this).toggleClass("completed");
	});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	//when we hit "enter" key
	if(event.which ===13){
		//grabbing new todo text
		var todoText = $(this).val();
		
		//create newtodo
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");

		//remove input text
		$(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
});