let quoteInput = document.getElementById("quoteInput");
let para = document.getElementById("quoteDisplay")
let timepara = document.getElementById("timer");
let submitBtn = document.getElementById("submitBtn");
let result = document.getElementById("result");
let resetBtn = document.getElementById("resetBtn");
let container = document.getElementById("speedTypingTest");
let spinner = document.getElementById("spinner")

resetBtn.onclick = function() {

    resetBtn.addEventListener("click", code);

    clearInterval(unid);
    sttime();
    result.textContent = "";
    quoteInput.value = '';

}

submitBtn.onclick = function() {
    let val = quoteInput.value;
    console.log(val);
    console.log(para.textContent);

    if (para.textContent === val) {

        let ti = clearInterval(unid);
        result.textContent = "you typed in " + timepara.textContent + " seconds ";



    } else {
        result.textContent = "You typed incorrect sentence";
    }
}


let unid;

function sttime() {
    let counter = 0;
    unid = setInterval(function() {
        counter = counter + 1;
        timepara.textContent = counter;
    }, 1000);
}
sttime();

function display(results) {
    para.textContent = spinner.classList.add("d-none");
    let {
        content
    } = results;
    para.textContent = content;

}

function code() {
    para.textContent = spinner.classList.remove("d-none");

    let options = {
        method: "GET"
    }
    let url = "https://apis.ccbp.in/random-quote";
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            display(jsonData);

        })
}

code();
