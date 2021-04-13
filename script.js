var tasks=[];

var loadTasks = function (){
  savedTasks = localStorage.getItem("tasks");
  if (!savedTasks){
      return false;
      }
  tasks = JSON.parse(savedTasks);
  console.log(tasks);
};



var loadPage = function(){
    // clearScreen();
    loadTasks();
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
    tasks[i-9].id = timeHour.text();
    if(!tasks[i-9].text){
      tasks[i-9].text="";
    };
    var timeTask = $("<div>").addClass("col-10 past description");
    $(timeTask).attr("id",$(timeHour).text());
    $(timeTask).html(tasks[i-9].text);
    var timeSave = $("<button>").addClass("col-1 btn saveBtn");
    $(timeSave).html('<span class="oi oi-clipboard"></span>');
    $(timeRow).append(timeHour);
    $(timeRow).append(timeTask);
    $(timeRow).append(timeSave);
    $(".container").append(timeRow);
}
}
loadPage();

var saveTask = function(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

var setTask = function(id, text){
    console.log("made it");
    for (i=0; i<9; i++){
        if(tasks[i].id === id){
          tasks[i].text = text;
        }
    }
  saveTask();
};

$(".time-block").on("click", ".description", function(){
    var text = $(this).text().trim();
    var textInput = $("<textarea>").addClass("col-10 description").val(text);
    $(textInput).attr("id",$(this).attr("id"));
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$(".time-block").on("blur", "textarea", function(){
    
    var text = $("<div>").addClass("col-10 description past");
    $(text).attr("id",$(this).attr("id"));
    for (var i=0; i<9; i++){
        if(tasks[i].id === $(this).attr("id")){
          $(text).html(tasks[i].text);
        }
    }
    $(this).replaceWith(text);
})

