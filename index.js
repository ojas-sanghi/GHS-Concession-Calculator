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
        <p class="text-center text-white name-cost item${i}">
            ${itemName} <br> <b>Cost: $${itemCost}</b>
        </p>
    </div>
    <div class="col col-sm-auto">
        <input type="number" class="amount-input item${i}" pattern="[0-9]*" size="5" min="0" />
    </div>
    <div class="col col-sm-1">
        <p class="text-center text-white total item${i}">
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

function updateValue(e) {
  console.log(e.target.value);
  console.log(e.target.classList);
}
