setInterval( ()=>{
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    if(hour < 12){
        document.getElementById("am-pm").innerHTML = "AM";
    }
    else{
        hour = hour - 12;
        document.getElementById("am-pm").innerHTML = "PM";
    }
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
}
,500);