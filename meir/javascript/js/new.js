var btnsArr = [
    "meir",
    "meir",
    "meir",
    "meir",
    "meir",
    "meir",
    "david",
    "david",
    "bob",
    "tim",
  ];

  
  var randPos = []; // 5, 6, 9, 8, 0, 4, 2, 1, 3, 7
  var finalArr = [];
  
  for (var i = 0; randPos.length < 10; i++) {
    var num = parseInt(Math.random() * 10); // num alleatoir 0-9    5
    if (!randPos.includes(num)) {
      randPos.push(num);
    }
  }
  alert(randPos);
  console.log(i);
  for (let index = 0; index < randPos.length; index++) {
      const element = randPos[index];
      finalArr.push(btnsArr[element]);
      
  }
  //randPos.forEach(function (x) {
  //  finalArr.push(btnsArr[x]);
  //});
  
  var toAppend = "";
  for (let i = 0; i < finalArr.length; i++) {
    const btn = finalArr[i];
    toAppend += `<button class="${btn}"></button>`;
  }
  //alert(document.getElementById("btn"));
  document.querySelector("div").innerHTML = toAppend;
  
  var tries = 0;
  var found = 0;
  var b = document.querySelector("b");
  var bts = document.querySelectorAll("button");
  bts.forEach(function (x) {
    x.addEventListener("click", function () {
      tries++;
      b.innerText = tries;
      if (x.className == "meir") {
        x.style.backgroundColor = "green";
        found++;
        if (found == 6) {
          setTimeout(function () {
            alert("You win!");
            gameOver();
          }, 500);
        }
      }
    });
  });
  
  function gameOver() {
    if (confirm("Restart?")) {
      bts.forEach(function (x) {
        x.style.backgroundColor = "white";
        tries = 0;
        found = 0;
        b.innerText = tries;
      });
    }
  }