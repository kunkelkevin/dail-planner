# Work Day Scheduler

The daily planner displays the hours of the current day starting at 9AM and going through 5PM.  If the task block is clicked on, it is converted into a text area that a task can be entered into.  Once clicked out of the task area, the information will persist on the page.  Once the save button is clicked then the information for that time block will be stored into local storage and will be retrieved if the page is refreshed.

MomentJS is used to display the day and time in the header.  It also checks against the current hour to display all tasks blocks before that hour as grey, afterwards as green and the current hour as red.  A interval is set for every minute to refresh the date and time in the header and the display color of the time blocks.

The website is [https://kunkelkevin.github.io/daily-planner/](https://kunkelkevin.github.io/daily-planner/)

Screenshot showing the schedule for a workday
![Daily Planner Screenshot](/img/screenshot-dp.png "Daily Planner")
