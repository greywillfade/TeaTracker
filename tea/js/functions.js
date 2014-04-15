/* ------------------------------------------------------------------
TeaTracker JS functions
Sally Jenkinson
------------------------------------------------------------------ */

function currentDate() {
    
    var today, d, weekday, month;
    d = new Date();
    
    weekday=new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";
    
    month=new Array();
    month[0]="January";
    month[1]="February";
    month[2]="March";
    month[3]="April";
    month[4]="May";
    month[5]="June";
    month[6]="July";
    month[7]="August";
    month[8]="September";
    month[9]="October";
    month[10]="November";
    month[11]="December";

    today = weekday[d.getDay()] + ' ' + d.getDate() + ' ' + month[d.getMonth()] + ' ' + d.getFullYear();    
    console.log(today);
    
    //Update the values on the page
    $("#today").html(today);
}


function getTotalCups() {
    
    $.get(
        "http://www.sallyjenkinson.co.uk/labs/teatracker/service/stats.php",
        {
            callname: "getCups",
            userid: "1"
        }
    )
    .done(function(data) {
        if (String(data) == "1") {
            $("#cuptotal").html('<span class="numcups">1</span> <span class="cupstoday">cup today</span>');
        }
        else {
            $("#cuptotal").html('<span class="numcups">' + data + '</span> <span class="cupstoday">cups today</span>');
        }
    });
}
    


//notify ------------------------------------------------------------
//Helper function used to display information
function notify(msg) {
    $("#msg").html(msg);
    $("#msg").show().delay(4000).fadeOut();
}

