async function requestREST(config) {
    var toReturn =  "There was an error"
    await $.ajax(config).done(res=> {
      if(!res.affectedRows) {
        res = JSON.parse(res);
      }
      if(res.affectedRows > 0) {
        toReturn = "Awesome!  You were added."
      }
    }).fail(err=> {
  
    })
    return toReturn;
  }
  
  $("#register").submit(async function(e) {
    e.preventDefault();
    var fd = new FormData(this)
    var config = {
      url: "https://burger-e0fcd7.appdrag.site/api/insertusers/insertusers",
      method: "POST",
    };
    const data = {}
    for (const item of fd.entries()) {
        console.log(item);
        data[item[0]] = item[1];
    }
    console.log(data);
    config.data = data;
    
    var res = await requestREST(config)
    $("div").html(res);
  })
  

/*
  var form = new FormData();
form.append("email", "delmalehfr@gmail.com");
form.append("password", "daniel6090");

var settings = {
  "url": "https://burger-e0fcd7.appdrag.site/api/utilisateur/login",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});*/
/*document.getElementById("submit").addEventListener("click",()=> {

var form = new FormData();
form.append("email", "ehfr@gmail.com");
form.append("password", "daniel6091");
form.append("lname", "davider");
form.append("fname", "tuliped");

var settings = {
  "url": "https://burger-e0fcd7.appdrag.site/api/insertusers/insertusers",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
});
*/
$("#getusers").click(function () {
    $.get("https://burger-e0fcd7.appdrag.site/api/getmyusers").done(res => {
     console.log(res);    
    var users= res.Table;
        var toAppend=``;
        users.forEach(x => {
         toAppend+=`<tr usser="user_${x.id}"><td>${x.fname}</td><td>${x.lname}</td><td>${x.email}</td><td>${x.role1}</td></tr>`;
        });
        //toAppend+="</table>";
        $("tbody").html(toAppend);
        $("table").DataTable();
    })
})