link = "https://random.dog/woof.json"

function call() {

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
        }

    }

    function showImages(data) {

        let element = document.getElementById("imagen");

        let comp = data.url.split(".").pop();
        comp = comp.toLowerCase();
        if (comp == "jfif" || comp == "jpg" || comp == "gif" || comp == "png" || comp == "jpeg") {
            element.innerHTML = `<img src="${data.url}">`;
        }
        else
            element.innerHTML = `<video src = "${data.url}" autoplay>`;

    }

}

