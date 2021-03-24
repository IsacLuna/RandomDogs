let link = "https://random.dog/woof.json";

function call() {

    //document.getElementById("butt").style.display = "none";
    document.getElementById("spin").style.display = "block";
    document.getElementById("imagen").innerHTML = "";
    let data = undefined;
    let request = new XMLHttpRequest;
    request.open('GET', link, true);
    request.send();

    request.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let resultData = this.response;
            let data = JSON.parse(resultData);
            showImages(data);

            console.log(data);
            document.getElementById("spin").style.display = "none";
        }

    }

}
function showImages(data) {

    let element = document.getElementById("imagen");

    let comp = data.url.split(".").pop();
    comp = comp.toLowerCase();
    if(data.fileSizeBytes < 200000){

        if (comp == "mp4" || comp == "webm"){
            call();
        }
        else
            element.innerHTML = `<img src="${data.url}">`;

    } else
        call();
    
}

