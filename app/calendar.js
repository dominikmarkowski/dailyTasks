$( "#datepicker" ).datepicker();
$( "#datepicker" ).datepicker("option", "dateFormat", "dd/mm/yy");
$(".task-container").droppable();
$(".todo-task").draggable({ revert: "valid", revertDuration:200 });
todo.init();