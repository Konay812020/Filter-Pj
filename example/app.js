var getinput = document.getElementById("search");
var getul = document.getElementById("members");
var getli = document.getElementsByTagName("li");

// console.log(getli);HtmlCollectionArray
var getsortazm1btn = document.getElementById("sortazm1");
var getsortzam1btn = document.getElementById("sortzam1");
var getsortazm1btn = document.getElementById("sortazm2");
var getsortazm1btn = document.getElementById("sortazm2");

getinput.addEventListener("keyup", filter);

function filter() {

    var inputfilter = this.value.toLowerCase();
    // console.log(inputfilter);

    for (var x = 0; x < getli.length; x++) {
        // console.log(getli[x]);
        // var getavalue = getli[x].querySelector("a").innerText;
        // console.log(getavalue);
        var getavalue = getli[x].querySelector("a").textContent.toLowerCase();
        // console.log(getavalue);
        if (getavalue.indexOf(inputfilter) > -1) {
            getli[x].style.display = "";

        } else {
            getli[x].style.display = "none";
        }
    }

}