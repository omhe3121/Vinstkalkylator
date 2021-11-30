var table_Income = document.getElementById("body_Income");
var table_loss = document.getElementById("body_loss");


function add() {
    let operation = getValueFromSelect("operation");
    let desc = getValueFromInput("desc");
    let price = getValueFromInput("kr");

    if (operation == "+") {
        addintoIncome(desc, price);
    } else if (operation == "-") {
        addintoLoss(desc, price);
    }

}

function addintoIncome(desc, price) {
    let profit = getProfit("profit");
    table_Income.innerHTML += `<tr><td>${desc}</td><td>${price} Kr</td></tr>`;
    document.getElementById("profit").value = (parseInt(profit) + parseInt(price)) + " Kr";

}

function addintoLoss(desc, price) {
    let profit = getProfit("profit");
    table_loss.innerHTML += `<tr><td>${desc}</td><td>${price} Kr</td></tr>`;
    document.getElementById("profit").value = (parseInt(profit) - parseInt(price)) + " Kr";
}

function getProfit(id) {
    let profit = document.getElementById("profit").value;
    if (profit != "0") {
        let split = profit.split(" ");
        return split[0];
    } else {
        return profit
    }

}

function getValueFromSelect(id) {
    let sel = document.getElementById(id);
    let operation = sel.options[sel.selectedIndex].text;
    if (operation != "+" && operation != "-") {
        alert("Please Select an Operation from the dropdown")
    } else {
        return operation;
    }
}

function getValueFromInput(id) {
    let input = document.getElementById(id).value;
    if (input == "") {
        alert("Please insert An Description/Price");
    } else {
        return input;
    }
}