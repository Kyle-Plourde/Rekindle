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