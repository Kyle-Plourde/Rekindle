function init()
{
    localStorage.setItem('james', false);
}

function addjames()
{
    localStorage.setItem('james', true);
    document.location.href = "home_one_contact.html";
}

function jamesadded ()
{
    var james = localStorage.getItem('james');
    if (james)
    {
        document.getElementById("james").style.display = "block"
    }
}