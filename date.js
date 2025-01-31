let dateEl = document.querySelector('.js-date-el');
//display date function
function displayDate() {
  let date = new Date();
   let utcDateDisplay = date.toUTCString().replace("GMT", "UTC")// converts date formart from gmt to utc (tasks required time)
    dateEl.textContent = utcDateDisplay;
 }
 setInterval(displayDate, 1000) // runs function every 1 secs to display seconds change

