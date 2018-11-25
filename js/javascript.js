var SiteTitle = " | Dipak Parmar"
if(active_menu == "Home")
{
    document.title = active_menu + SiteTitle;
    document.getElementById("home").className += " active";
}
if(active_menu == "About")
{
    document.title = active_menu + SiteTitle;
    var setActiveClass = document.getElementById("about");
    setActiveClass.className = setActiveClass.className.replace(" active", "");
}
if(active_menu == "Gallery")
{
    document.title = active_menu + SiteTitle;
    var setActiveClass = document.getElementById("gallery");
    setActiveClass.className = setActiveClass.className.replace(" active", "");
}
if(active_menu == "Contact")
{
    document.title = active_menu + SiteTitle;
    var setActiveClass = document.getElementById("contact");
    setActiveClass.className = setActiveClass.className.replace(" active", "");
}




