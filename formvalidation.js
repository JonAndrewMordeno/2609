function val()
{
    var EventType = document.forms ["eventForm"]["events"].value;
    var EventDates = document.forms ["eventForm"]["EventDates"].value;
    var EventTitle = document.forms ["eventForm"]["EventTitle"].value;
    
    if (EventType == "blank"){
        alert("Please select the event type.");
        return false;
    }

    if(EventDates == ""){
        alert("Please choose a valid date. (Leave blank to the second date option if this is a one day event.");
        return false;
    }

    if(EventTitle == ""){
        alert("Please enter a valid title.");
        return false;
    }

    else{
        alert("Event added successfully.");
    }
}

function success(){
    alert("Event added successfully.");
}

function currentDate(){
    n = new Date();
    year = n.getFullYear();
    month = n.getMonth() + 1;
    day = n.getDate();
    document.getElementById("dateToday").value = month + "/" + day + "/" + year;
}

