var tasks = [];

var loadTasks = function () {
  savedTasks = localStorage.getItem("tasks");
  if (!savedTasks) {
    return false;
  }
  tasks = JSON.parse(savedTasks);
};

var auditTasks = function () {
  timeNow = moment().hour();
  for (var i = 9; i < 18; i++) {
    if (timeNow - i > 0) {
      $("." + i).removeClass("future present");
      $("." + i).addClass("past");
    } else if (timeNow - i < 0) {
      $("." + i).removeClass("past present");
      $("." + i).addClass("future");
    } else {
      $("." + i).removeClass("future past");
      $("." + i).addClass("present");
    }
  }
};

var loadPage = function () {
  // clearScreen();

  for (var i = 9; i < 18; i++) {
    var timeRow = $("<div>").addClass("row time-block");
    var timeHour = $("<div>").addClass("col-1 hour");
    if (i > 12) {
      $(timeHour).html(i - 12 + "PM");
    } else if (i === 12) {
      $(timeHour).html(i + "PM");
    } else {
      $(timeHour).html(i + "AM");
    }
    tasks[i - 9] = { id: $(timeHour).text(), text: "", time: i };

    loadTasks();

    var timeTask = $("<div>").addClass("col-10 description task");
    $(timeTask).attr("id", $(timeHour).text());
    $(timeTask).attr("time", i);
    $(timeTask).addClass(String(i));
    $(timeTask).html(tasks[i - 9].text);
    var timeSave = $("<button>").addClass("col-1 btn saveBtn");
    $(timeSave).attr("id", $(timeHour).text());
    $(timeSave).html('<span class="oi oi-clipboard"></span>');
    $(timeRow).append(timeHour);
    $(timeRow).append(timeTask);
    $(timeRow).append(timeSave);
    $(".container").append(timeRow);
  }
  auditTasks();
};

loadPage();

var saveTask = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

var setTask = function (id, text) {
  console.log(id, text);
  for (i = 0; i < 9; i++) {
    if (tasks[i].id === id) {
      tasks[i].text = text;
    }
  }
  saveTask();
};

$(".time-block").on("click", ".saveBtn", function () {
  var id = $(this).attr("id");
  var text = $(this).closest(".time-block").children(".description").html();
  setTask(id, text);
});

$(".time-block").on("click", ".task", function () {
  console.log("please");
  var text = $(this).text().trim();
  var textInput = $("<textarea>").addClass("col-10 description").val(text);
  $(textInput).attr("id", $(this).attr("id"));
  $(textInput).attr("time", $(this).attr("time"));
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});

$(".time-block").on("blur", "textarea", function () {
  var text = $("<div>").addClass("col-10 description task");
  $(text).attr("id", $(this).attr("id"));
  $(text).attr("time", $(this).attr("time"));
  $(text).addClass(String($(text).attr("time")));
  $(text).html($(this).val());
  $(this).replaceWith(text);
  auditTasks();
});

setInterval(function () {
  auditTasks();
  console.log("checked");
}, 60000);
