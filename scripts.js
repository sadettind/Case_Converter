let upper = document.getElementById("upper-case");
let lower = document.getElementById("lower-case");
let proper = document.getElementById("proper-case");
let sentence = document.getElementById("sentence-case");
let saveFile = document.getElementById("save-text-file");

let boxText = document.querySelector("textarea");

saveFile.addEventListener("click", function () {
    download("text.txt", boxText.value);

});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

upper.addEventListener("click", function () {
    boxText.value = boxText.value.toUpperCase();
});

lower.addEventListener("click", () => {
    boxText.value = boxText.value.toLowerCase();
});

proper.addEventListener("click", function () {
    let properText = boxText.value.toLowerCase().split(" ");

    for (let i = 0; i < properText.length; i++) {
        properText[i] = properText[i].charAt(0).toUpperCase() + properText[i].slice(1);
    }
    boxText.value = properText.join(" ");
});

sentence.addEventListener("click", function () {
    let sentenceText = boxText.value.toLowerCase().split(". ");

    for (let i = 0; i < sentenceText.length; i++) {
        sentenceText[i] = sentenceText[i].charAt(0).toUpperCase() + sentenceText[i].slice(1);
    }
    boxText.value = sentenceText.join(". ");

});


