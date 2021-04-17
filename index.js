// ids-
// name-cost item{i}
// amount-input item{i}
// total item{i}

const items = {
  "Small Drink": 1,
  "Sweet Tea": 1.5,
  "Drink": 2,
  "Water": 1.5,
  "Sausage on a Stick": 3,
  "Nachos": 2.5,
  "Nachos w/ chili": 3,
  "Plain Hot Dog": 1.5,
  "Hot Dog w/ cheese": 2,
  "Hot Dog w/ chili & cheese": 2.25,
  "Frito Pie": 3,
  "Hamburger": 4.5,
  "CheeseBurger": 5,
  "Hamburger, Drink, Chips": 6.5,
  "Cheeseburger, Drink, Chips": 7,
  "2 Plain Hot Dogs, Drink, Chips": 5,
  "2 Hot Dogs w/ chili and/or cheese, Drink, Chips": 7,
  "Popcorn": 2,
  "Chips": 0.5,
  "Chocolate Candy": 1,
  "Pickles": 0.75,
  "Pickle Pops": 0.25,
  "Icees": 0.5,
  "Pizza": 2
}
var itemNames = Object.keys(items);

const template = document.createElement('template');
for (var i = 0; i < itemNames.length; i++) {

  var itemName = itemNames[i];
  var itemCost = items[itemName];

  template.innerHTML = `
  <div class="row align-items-center justify-content-center" id="row${i}">
    <div class="col col-sm-1">
        <p class="text-justify text-white name-cost item${i}">
            ${itemName} <br> <b>Cost: $${itemCost}</b>
        </p>
    </div>
    <div class="col col-sm-auto">
        <input type="number" class="form-control form-control-sm amount-input item${i}" pattern="[0-9]*" min="0" value="0" />
    </div>
    <div class="col col-sm-1">
        <p class="text-justify text-white total item${i}">
            Total: $0
        </p>
    </div>
  </div>
  <hr>
`
  document.getElementById("all-the-items").appendChild(template.content.cloneNode(true));
}


const inputs = document.getElementsByClassName("amount-input");
for (var input of inputs) {
  input.addEventListener('input', updateValue);
}

function extractDollarAmountFromText(text) {
  // text = "Small Drink\nCost: $1"
  var dollarIndex = text.indexOf("$");
  var costSubStr = text.substring(dollarIndex); // "$1"
  var costInt = Number(costSubStr.substring(1)); // 1
  return costInt;
}

function updateValue(e) {
  var numItems = e.target.value;
  var itemClass = e.target.classList[3];
  
  // update row's value
  var rowItems = document.getElementsByClassName(itemClass);
  var rowCost = extractDollarAmountFromText(rowItems[0].innerText);
  var rowTotal = rowItems[2];
  rowTotal.innerText = `Total: $${rowCost * numItems}`

  // update total's value at the bottom
  var finalTotal = document.getElementById("final-total");
  var totalSum = 0;
  for (var i = 0; i < itemNames.length; i++) {
    var itemTotal = document.getElementsByClassName(`item${i}`)[2];
    var itemTotalCost = extractDollarAmountFromText(itemTotal.innerText);
    totalSum += itemTotalCost;
  }
  finalTotal.innerHTML = `<b>Total: </b> $${totalSum}`
}
