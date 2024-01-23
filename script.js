// function to calculate and display tip, total bill, and amount per person
function calculateAndDisplay() {
    // get the values from the html form
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPeople = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    // calculate tip, total bill, amount each person owes
    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPerson = calcAmtPerPerson(totalBill, numOfPeople)
    
    // display the results in the html
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText = 'Total Bill: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText = 'Amount per person: $' + amtPerPerson.toFixed(2)
}