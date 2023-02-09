// Get the modal
var modal = document.getElementById("login");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$(document).ready(function () {
  const APIKEY = "63e4b31d478852088da67f11";

  $(".dots").hide();

  $("#account-login").on("click", function (e) {
    e.preventDefault();

    $(".dots").show();
    let username = $("#username").val();
    let password = $("#password").val();

    if (username == "") {
      alert("Username cannot be empty");
      $(".dots").hide();
      return;
    }
    if (password == "") {
      alert("Password cannot be empty");
      $(".dots").hide();
      return;
    }

    let settings = {
      async: true,
      crossDomain: true,
      url: "https://customer-b2c0.restdb.io/rest/customer",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache",
      },
    };
    $.ajax(settings).done(function (response) {
      let exists = false;
      for (var i = 0; i < response.length; i++) {
        if (
          response[i].Username === username &&
          response[i].Password === password
        ) {
          exists = true;
          $(".dots").hide();
          window.location = "login.html";
          var nnname = response[i].Name;
          window.nnname = response[i].Name;
          sessionStorage.setItem("Name", nnname);
        }
      }
      if (exists == false) {
        $(".dots").hide();
        alert("Incorrect username or password");
        $("#username").val("");
        $("#password").val("");
        return;
      }
    });
  });
});
