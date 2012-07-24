var content_divs = [ "projects", "contact", "resume" ];

// close initial windows, open main page divs
function enter_site() {
    document.getElementById("name_div").style.visibility="hidden";
    document.getElementById("enter_div").style.visibility="hidden";
    document.getElementById("side_menu").style.visibility="visible";
}

// open a content div
function display_content(name) {

    // erase existing div
    for (var div in content_divs) {
	console.log(div);
	document.getElementById(content_divs[div]).style.visibility="hidden";
    }

    // bring up requested page
    document.getElementById(name).style.visibility="visible";
}