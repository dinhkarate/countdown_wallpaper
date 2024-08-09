let lable="";

window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        if (properties.counterlable) {
            lable=properties.counterlable.value;
        }
        if (properties.year) {
            final_year=properties.year.value;
        }
        if (properties.month) {
            final_month=parseInt(properties.month.value)-1;
        }
        if (properties.date) {
            final_date=properties.date.value;
        }
        if (properties.hour) {
            final_hour=properties.hour.value;
        }
        if (properties.minute) {
            final_minute=properties.minute.value;
        }
        if (properties.second) {
            final_second=properties.second.value;
        }
    },
};

// Month list in short form
let month_short=[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]

// Month list in long form
let month_long=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

// Day list in short form
let day_short=[
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
]

// Day list in long form
let day_long=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

// final date construction
let final_date=9;
let final_month=9;
let final_year=2022;
let final_hour=00;
let final_minute=00;
let final_second=00;
// final date object
let final_date_obj=new Date(final_year, final_month, final_date, final_hour, final_minute, final_second);

// function to calculate time difference and set all HTML elements
function countdown() {
    // update final date object
    final_date_obj.setFullYear(final_year);
    final_date_obj.setMonth(final_month);
    final_date_obj.setDate(final_date);
    final_date_obj.setHours(final_hour);
    final_date_obj.setMinutes(final_minute);
    final_date_obj.setSeconds(final_second);

    // current date object
    let date = new Date();
    let current_year=date.getFullYear();
    let current_month=date.getMonth();
    let current_date=date.getDate();
    let current_time=date.toLocaleTimeString();
    let current_day=date.getDay();

    // current date string construction
    let current_date_string=current_date + " " + month_long[current_month] + " " + current_year;
    
    // date difference
    let diff=final_date_obj-date;
    let diff_secs=Math.floor((diff/1000)%60);
    let diff_mins=Math.floor((diff/(1000*60))%60);
    let diff_hours=Math.floor((diff/(1000*60*60))%24);
    let diff_days=Math.floor((diff/(1000*60*60*24)));
    
    // set counter lable
    document.getElementById("counter-lable").innerHTML = lable;

    // set countdown timer
    document.getElementById("days").innerHTML = (diff_days < 10 && diff_days > 0)?'0'+diff_days:diff_days;
    document.getElementById("hours").innerHTML = (diff_hours < 10 && diff_hours > 0)?'0'+diff_hours:diff_hours;
    document.getElementById("minutes").innerHTML = (diff_mins < 10 && diff_mins > 0)?'0'+diff_mins:diff_mins;
    document.getElementById("seconds").innerHTML = (diff_secs < 10 && diff_secs > 0)?'0'+diff_secs:diff_secs;

    // set current timer
    document.getElementById("current-date").innerHTML = current_date_string;
    document.getElementById("current-time").innerHTML = current_time;
    document.getElementById("current-day").innerHTML = day_long[current_day];

    setTimeout(countdown, 1000)
}

countdown();