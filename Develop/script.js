// var localizedFormat = require('dayjs/plugin/localizedFormat')
// dayjs.extend(localizedFormat)

let divContainerEl = $(".container-fluid")
let currentTime = $("#currentDay")
let currentDate = dayjs().format('MM/DD/YYYY')
let currentHour = dayjs().format('h')
const startTime = dayjs().set('hour', 9)
const endTime = dayjs().set('hour', 5)
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
currentTime.text(currentDate)
function renderScheduler() {
  for (let i = 0; i < 9; i++) {
    //create
    let hourContainer = $('<div>')
    let hour = $('<div>')
    let task = $('<textarea>')
    let saveButton = $('<button>')
    //attr/text
    hourContainer.attr({'class': 'row time-block'})
    hour.attr({'class': 'col-2 col-md-1 hour text-center py-3'})
    task.attr({'class': 'col-8 col-md-10 description'})
    saveButton.attr({'class': 'btn saveBtn col-2 col-md-1'})
    //append
    divContainerEl.append(hourContainer)
    hourContainer.append(hour)
    hourContainer.append(task)
    hourContainer.append(saveButton)
    setTime(hour)
    
  }
};
renderScheduler()

function setTime(hour){
  

}
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

