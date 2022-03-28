const Guests = [];
const Menu = {
  entree: [
    { id: 1, name: "sushi", prep: 3000, price: 30 }, // 0
    { id: 2, name: "eggroll", prep: 2000, price: 25 }, // 1
    { id: 3, name: "salad", prep: 1500, price: 50 }, // 2
  ],
  main: [
    { id: 1, name: "pargit", prep: 5000, price: 80 },
    { id: 2, name: "steak", prep: 2000, price: 130 },
    { id: 3, name: "roti", prep: 10000, price: 120 },
  ],
  dessert: [
    { id: 1, name: "glace", prep: 500, price: 40 },
    { id: 2, name: "brownie", prep: 2000, price: 30 },
    { id: 3, name: "creme brulee", prep: 5000, price: 50 },
  ],
  drinks: [
    { id: 1, name: "water", prep: 500, price: 10 },
    { id: 2, name: "coke", prep: 2000, price: 20 },
    { id: 3, name: "whiskey", prep: 1000, price: 50 },
    { id: 4, name: "martini", prep: 3000, price: 40 },
  ],
};

class Order {
  constructor(_entree, _main, _dessert, _drinks) {
    this.entree = _entree;
    this.main = _main;
    this.dessert = _dessert;
    this.drinks = _drinks;
  }
}
createForm();

function createForm() {
  var toAppend = "";
  for (const key in Menu) {
    const element = Menu[key];
    toAppend += `
      <div>
        <p>${key}</p>`;
    element.forEach((x) => {
      toAppend += `
        <div><label for="">${x.name}</label>
        <input type="checkbox" name="${key + x.id}" id="${key + x.id}"/></div>`;
    });
    toAppend += `</div>`;
  }
  toAppend += `<input type="submit" value="Place Order">`;
  var form = document.querySelector("form");
  form.innerHTML = toAppend;
  form.addEventListener("submit", function (e) {
    e.preventDefault();

  });
}

welcome();

function placeOrder(x) {
  var entree = parseInt(
    prompt(`Hello ${x}, What number ENTREE would you like? `)
  ); // 3
  var main = parseInt(prompt("What number MAIN would you like? ")); // 1
  var dessert = parseInt(prompt("What number DESSERT would you like? ")); // 3
  var drinks = parseInt(prompt("What number DRINK would you like? ")); // 4

  return new Order(
    Menu.entree.find((x) => x.id == entree),
    Menu.main.find((x) => x.id == main),
    Menu.dessert.find((x) => x.id == dessert),
    Menu.drinks.find((x) => x.id == drinks)
  );
}

function welcome() {
    
  var qty = parseInt(prompt("How many guests are you?")); // 2

  for (let i = 0; i < qty; i++) {
    var guest = {};
    guest.name = prompt("What is your name?");
    guest.order = placeOrder(guest.name); // {}
    Guests.push(guest);
  }
  sendToKitchen();
}

function sendToKitchen() {
  sendDrinks().then(sendEntree).then(sendMain).then(sendDessert);
  // .then(bringBill);

  function sendDrinks() {
    return new Promise((resolve, reject) => {
      var allDrinks = [];
      Guests.forEach((g) => {
        allDrinks.push(
          new Promise((res, rej) => {
            setTimeout(() => {
              res(`Dear, ${g.name}, your ${g.order.drinks.name} is served`);
            }, g.order.drinks.prep);
          })
        );
      });
      Promise.all(allDrinks).then((arr) => {
        arr.forEach((x) => {
          console.log(x);
        });
        resolve();
      });
    });
  }

  function sendEntree() {
    return new Promise((resolve, reject) => {
      var allEntree = [];
      Guests.forEach((g) => {
        allEntree.push(
          new Promise((res, rej) => {
            setTimeout(() => {
              res(`Dear, ${g.name}, your ${g.order.entree.name} is served`);
            }, g.order.entree.prep);
          })
        );
      });
      Promise.all(allEntree).then((arr) => {
        arr.forEach((x) => {
          console.log(x);
        });
        resolve();
      });
    });
  }
  function sendMain() {
    return new Promise((resolve, reject) => {
      var allMain = [];
      Guests.forEach((g) => {
        allMain.push(
          new Promise((res, rej) => {
            setTimeout(() => {
              res(`Dear, ${g.name}, your ${g.order.main.name} is served`);
            }, g.order.main.prep);
          })
        );
      });
      Promise.all(allMain).then((arr) => {
        arr.forEach((x) => {
          console.log(x);
        });
        resolve();
      });
    });
  }
  function sendDessert() {
    return new Promise((resolve, reject) => {
      var allDessert = [];
      Guests.forEach((g) => {
        allDessert.push(
          new Promise((res, rej) => {
            setTimeout(() => {
              res(`Dear, ${g.name}, your ${g.order.dessert.name} is served`);
            }, g.order.dessert.prep);
          })
        );
      });
      Promise.all(allDessert).then((arr) => {
        arr.forEach((x) => {
          console.log(x);
        });
        resolve();
      });
    });
  }
}