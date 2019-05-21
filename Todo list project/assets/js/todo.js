//to cancel out things in to do list
$('ul').on('click','li',function(){             //starting mai ul mai khali 3 li thai but to add further we would
    $(this).toggleClass('completed');                   //use "li" after click to specify it. And ul is the inly element that doesn't get deleted. 
});

//to remove things in to do list
$('ul').on('click','span',function(event){
    $(this).parent().fadeOut(500,function(){        //here, (this) refers to particular span
        $(this).remove();                           //here, (this) refers to li [because of .parent() method]
    });
    event.stopPropagation();
});

//to add new things in to do list
$('input[type="text"]').keypress(function(event){
    if(event.which==13)
    {
        var todo=$(this).val();     //to set value
        $(this).val('');            //to clear the input again to write next "add something"
        $('ul').append("<li><span><i class='fa fa-trash'></i> </span>" + todo +"</li>");     //append text into todo list
    }
});

//to use the plus icon to hide and unhide the input text
$('.fa-plus').click(function(){
    $('input[type="text"]').fadeToggle();  
});

