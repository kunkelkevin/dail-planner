for (var i = 9; i < 18; i++){
    var timeRow = $("<div>").addClass("row time-block");
    var timeHour = $("<div>").addClass("col-1 hour");
    if (i>12){
        $(timeHour).html((i-12) + "PM");
    } else if (i===12){
        $(timeHour).html(i + "PM");
    } else {
        $(timeHour).html(i + "AM");
    }
    var timeTask = $("<div>").addClass("col-10 past description");
    $(timeTask).attr("id",$(timeHour).text());
    $(timeTask).html("<p></p>");
    var timeSave = $("<button>").addClass("col-1 btn saveBtn");
    $(timeSave).html('<span class="oi oi-clipboard"></span>');
    $(timeRow).append(timeHour);
    $(timeRow).append(timeTask);
    $(timeRow).append(timeSave);
    $(".container").append(timeRow);
}
$(".description").on("click",function(){
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("col-10 description").val(text);
    console.log($(this).attr("id"));
    $(textInput).attr("id",$(this).attr("id"));
    console.log($(textInput).attr('id'));
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$(".description").on("blur","textarea", function(){
    var task = 1;
})