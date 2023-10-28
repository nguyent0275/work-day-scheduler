// jquery detecting if page is ready
$(document).ready(function () {
  console.log("ready!");
  // the div that contains the whole work scheduler
  let divContainerEl = $(".container-fluid");
  // selecting the <p> tag to display the current Date and hour
  let currentTime = $("#currentDay");
  // using dayjs to format the current date and hour
  let currentDate = dayjs().format("MMMM DD YYYY hh:mm A");
  let currentHour = dayjs().format("HH");
  // hour and pmConverter are set as global empty strings to be used later
  let hour = "";
  // stores AM into a variable to be used to display hours correctly
  let amPM = "AM";
  let pmConverter = "";
  // displaying the current date and hour to the page
  currentTime.text(currentDate);
  function renderScheduler() {
    // setting the hour to 9, which correlates to the starting hour. hour < 18 sets the forloop to iterate 9 times up to 5pm which is the final hour.
    for (hour = 9; hour < 18; hour++) {
      //creates the elements for the html
      let hourContainer = $("<div>");
      let hourDiv = $("<div>");
      let taskText = $("<textarea>");
      let saveButton = $("<button>");
      //sets classes and text to the element
      hourContainer.attr({ class: "row time-block" });
      hourDiv.attr({ class: "col-2 col-md-1 hour text-center py-3" });
      taskText.attr({ class: "col-8 col-md-10 description" });
      saveButton.attr({
        class: "btn saveBtn col-2 col-md-1 material-symbols-outlined",
      });
      saveButton.text("save");
      //append the smaller div container and 3 elements to the smaller container
      divContainerEl.append(hourContainer);
      hourContainer.append(hourDiv);
      hourContainer.append(taskText);
      hourContainer.append(saveButton);
      // if the hour is before or equal to 12, then it will end with AM and is set to the page
      if (hour <= 12) {
        amPM = "AM";
        hourDiv.text(hour + amPM);
        // saving the hour as a value to the save button and an id to the textarea
        saveButton.attr({ value: hour });
        taskText.attr({ id: hour });

        // if there is locally stored data for this specific hour, then the data will be displayed inside the texarea
        writeText(hour, taskText)
      } else {
        // if the hour is after 12 it will end with PM
        amPM = "PM";
      }
      // if hour is after 12, the standard 0-24 clock will be converted to 0-12 via subtraction of 12
      if (hour > 12) {
        // new hour value is stored under pmConverter and is set to the page
        pmConverter = hour - 12;
        hourDiv.text(pmConverter + amPM);
        // saving the hour as a value to the save button and an id to the textarea
        saveButton.attr({ value: pmConverter });
        taskText.attr({ id: pmConverter });
        writeText(pmConverter, taskText)
      }
      // if the hour is before the current time it will be designated with class "past"
      if (hour < currentHour) {
        hourContainer.addClass("past");
        // if the hour is the same as the current time it will be designated with class "present"
      } else if (hour === +currentHour) {
        hourContainer.addClass("present");
        // if the hour is after the current time it will be designated with class "futre"
      } else {
        hourContainer.addClass("future");
      }
    }
  }
  renderScheduler();
  // targeting the save button on html
  let saveButton = $(".btn");
  saveButton.on("click", saveLocal);
  function saveLocal() {
    // the clicked button's value will be assigned to hour number (the value is equal to the hour of the container that the button is located)
    const toDoHour = $(this).attr("value");
    // targeting the textarea's id based on the clicked value by adding a string of '#'
    const textAreaEl = $("#" + toDoHour);
    // the hour of the todo is prefaced with "Hour" and is locally stored with the textarea's value
    const hourKey = `Hour ${toDoHour}`;
    localStorage.setItem(hourKey, textAreaEl.val());
  }
  // getting the locally stored data
  function writeText(hour, taskText) {
    let storedData = localStorage.getItem(`Hour ${hour}`);
    // checking if stored data exists, then displays it 
    if (storedData) {
      taskText.text(storedData);
    }
    }
});