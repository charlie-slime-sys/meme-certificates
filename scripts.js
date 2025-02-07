document.addEventListener("change", changeee);

document.addEventListener("DOMContentLoaded", changeee);

function changeee(){
    let selector = document.getElementById("tertyuiop").value;
    console.log(selector);
    if (selector == "chili") {
        document.getElementById("e").innerHTML=`<img src="/images/chili.png">`;
    } else if (selector == "goop") {
        document.getElementById("e").innerHTML=`<img src="/images/goop.png">`;
    } else if (selector == "fast") {
        document.getElementById("e").innerHTML=`<img src="/images/fast.png">`;
    }
}

