//put bill amount in the placeholder
document.getElementById("container").onclick = function() {
    let billAmount = Number(document.getElementById("question-1").value);
    //prompt you the percent when you slide the percent slide
    let tipP = document.getElementById("tipInput").value;
    //prompt you the number of people  on the bill that will split the bill
    let splitBill = document.getElementById("myRange").value;
    //Value of the tip
    let tipValue = billAmount * (tipP / 100);
    //Add the bill amount and the total bill to get the total
    let newBillEach = (billAmount + tipValue) / splitBill
    //put the tip amount on the screen
    let tipEach = tipValue / splitBill;
    //put the number of the tip and the number of people on the slide 
    document.getElementById("tipOutput").innerHTML = tipP + "%";
    document.getElementById("splitBillOutput").innerHTML = splitBill;
    document.getElementById("newBill").innerHTML =  newBillEach.toFixed(2);
    document.getElementById("tipEach").innerHTML =  tipEach.toFixed(2);
    //fix the number of decimal places on the lines new bill and tip amount

}