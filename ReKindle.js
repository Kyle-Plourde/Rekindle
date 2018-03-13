function init()
{
    localStorage.setItem('james', 'false');
}

var count = 1;
function setColor(btn, color) {
    var property = document.getElementById(btn);
    if (count == 0) {
        property.style.backgroundColor = "white"
        count = 1;        
    }
    else {
        property.style.backgroundColor = "rgb(120, 214, 99)"
        count = 0;
    }
}

function addjames()
{
    localStorage.setItem('james', 'true');
    document.location.href = "home_one_contact.html";
}

function jamesadded()
{
    var james = localStorage.getItem('james');
    if (james)
    {
        document.getElementById("james").style.display = "block"
    }
}

function addfb()
{
    if (localStorage.getItem('fb') === 'false'){
        localStorage.setItem('fb', 'true');
    }
    else {
        localStorage.setItem('fb', 'false');
    }
    setColor('btn1', 'rgb(99, 214, 99)');
}

function addinsta()
{
    if (localStorage.getItem('insta') === 'false'){
        localStorage.setItem('insta', 'true');
    }
    else {
        localStorage.setItem('insta', 'false')
    }
    setColor('btn2', 'rgb(99, 214, 99)');
}

function addsnap()
{
    if (localStorage.getItem('snap') === 'false'){
        localStorage.setItem('snap', 'true');
    }
    else {
        localStorage.setItem('snap', 'false');
    }
    setColor('btn3', 'rgb(99, 214, 99)');
}

function notifweekly()
{
    //localStorage.setItem('weekly', 'true');
    //localStorage.setItem('bi-weekly','false');
    //localStorage.setItem('monthly', 'false');
    //localStorage.setItem('annually', 'false');

    localStorage.setItem('notif', 'weekly');
}

function notifbiweekly()
{
/*     localStorage.setItem('weekly', 'false');
    localStorage.setItem('bi-weekly','true');
    localStorage.setItem('monthly', 'false');
    localStorage.setItem('annually', 'false'); */

    localStorage.setItem('notif', 'biweekly');
}

function notifmonthly()
{
/*     localStorage.setItem('weekly', 'false');
    localStorage.setItem('bi-weekly','false');
    localStorage.setItem('monthly', 'true');
    localStorage.setItem('annually', 'false'); */

    localStorage.setItem('notif', 'monthly');
}

function notifannually()
{
/*     localStorage.setItem('weekly', 'false');
    localStorage.setItem('bi-weekly','false');
    localStorage.setItem('monthly', 'false');
    localStorage.setItem('annually', 'true'); */

    localStorage.setItem('notif', 'annually');
}