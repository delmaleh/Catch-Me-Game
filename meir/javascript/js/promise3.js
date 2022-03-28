function createCar(){
    
    orderMetal()
    .then(buildFrame)
    .then(installMotor)
    .then(addInterior)
    .then(seatInstall)
    .then(exteriorPainting);
}

var imgageCar = document.getElementById("car");

function orderMetal() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Order Metal");
        if (true) {
            imgageCar.src="img/metal.jpg"
            resolve();
        } else {
          reject("Error");
        }
      }, parseInt(Math.random() * 7000));
    });
  }

  function buildFrame() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("build Frame");
        if (true) {
            imgageCar.src="img/frame.jpg"
            resolve();
        } else {
          reject("Error");
        }
      }, parseInt(Math.random() * 7000));
    });
  }
  function installMotor() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("install Motor");
        if (true) {
            imgageCar.src="img/motor.jpg"
            resolve();
        } else {
          reject("Error");
        }
      }, parseInt(Math.random() * 7000));
    });
  }
  function addInterior() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("build interior");
        if (true) {
            imgageCar.src="img/interior.jpg"
            resolve();
        } else {
          reject("Error");
        }
      }, parseInt(Math.random() * 7000));
    });
  }
  function seatInstall() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("install seat");
        if (true) {
            imgageCar.src="img/banquette.jpg"
            resolve();
        } else {
          reject("Error");
        }
      }, parseInt(Math.random() * 7000));
    });
  }
  function exteriorPainting() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("painting exterior");
        if (true) {
            imgageCar.src="img/painting.jpg"
            resolve();
        } else {
          reject("Error");
        }
      }, parseInt(Math.random() * 7000));
    });
  }