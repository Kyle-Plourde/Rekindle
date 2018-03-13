function init()
{
    localStorage.setItem('james', 'false');
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
}

function addinsta()
{
    if (localStorage.getItem('insta') === 'false'){
        localStorage.setItem('insta', 'true');
    }
    else {
        localStorage.setItem('insta', 'false')
    }
}

function addsnap()
{
    if (localStorage.getItem('snap') === 'false'){
        localStorage.setItem('snap', 'true');
    }
    else {
        localStorage.setItem('snap', 'false');
    }
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