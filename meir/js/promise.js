// USA - bomb()

// 1 - USA  -- 1234
// 2 - France  -- 2546
// 3 - Chine -- 9696
// 4 - Russie -- 7777
// 5 - Israel -- 2626

getFranceCode(1234)
  .then(getChineCode)
  .then(getRussieCode)
  .then(getIsraelCode)
  .then(successHandler)
  .catch(errorHandler)
  .finally(() => {
    console.log(
      "I'm done for the day.  I dont care what happened with the bomb"
    );
  });

function successHandler(result) {
  alert("The final code is: " + result);
}

function errorHandler(error) {
  alert("There was a problem, error: " + error);
}

function getFranceCode(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("France is soooo nice");
      alert(code);
      if (code === 12344356) {
        resolve(25462);
      } else {
        reject("USA gave me the wrong code");
      }
    }, parseInt(Math.random() * 2000));
  });
}

function getChineCode(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("The china wall is huuuuge");
      if (code === 2546) {
        resolve(9696);
      } else {
        reject("France gave me the wrong code");
      }
    }, parseInt(Math.random() * 2000));
  });
}

function getRussieCode(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Why is it so coooold here");
      if (code === 9696) {
        resolve(7777);
      } else {
        reject("China gave me the wrong code");
      }
    }, parseInt(Math.random() * 2000));
  });
}

function getIsraelCode(code) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I dont want to leave this plaaaaace");
      if (code === 7777) {
        const Soldiers = [
          "haim",
          "dudu",
          "lili",
          "shushu",
          "wewe",
          "vivi",
          "toto",
        ];

        const AllPromises = [];
        Soldiers.forEach((s) => {
          AllPromises.push(
            new Promise((resolve, reject) => {
              console.log(s + " has departed");
              setTimeout(() => { 
                resolve(s + " has arrived")
              }, parseInt(Math.floor() * 2000));
            })
          );
        });

        Promise.all(AllPromises).then(arr=> {
          arr.forEach(p=> {
            console.log(p)
          })
        })

        resolve(2626);
      } else {
        reject("Russia gave me the wrong code");
      }
    }, parseInt(Math.random() * 2000));
  });

}