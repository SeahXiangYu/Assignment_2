$(document).ready(function () {
  const APIKEY = "63e4b31d478852088da67f11";

  $(".dots").hide();

  $("#account-submit").on("click", function (e) {
    e.preventDefault();

    $(".dots").show();
    let name = $("#name").val();
    let username = $("#username").val();
    let password = $("#password").val();
    let repeatPassword = $("#repeat-password").val();

    if (name == "") {
      alert("Name cannot be empty");
      $(".dots").hide();
      return;
    }
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
    if (password.length < 10) {
      alert("Password length must be 10 characters or more");
      $(".dots").hide();
      return;
    }
    if (repeatPassword == "") {
      alert("Repeat password cannot be empty");
      $(".dots").hide();
      return;
    }
    if (password != repeatPassword) {
      alert("Repeat password must match password");
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
        if (response[i].Username === username) {
          exists = true;
          break;
        }
      }

      if (exists) {
        alert("Username already exists. Please choose another one.");
        $(".dots").hide();
        return;
      } else {
        let jsondata = {
          Name: name,
          Username: username,
          Password: password,
        };

        let settings = {
          async: true,
          crossDomain: true,
          url: "https://customer-b2c0.restdb.io/rest/customer",
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache",
          },
          processData: false,
          data: JSON.stringify(jsondata),
          beforeSend: function () {
            alert("Sucessfully registered for an account");
            $(".dots").hide();

            $("#add-contact-form").trigger("reset");
          },
        };

        $.ajax(settings).done(function (response) {
          console.log(response);

          $("#account-submit").prop("disabled", false);
          window.location = "index.html";
          var signinname = name;
          sessionStorage.setItem("Name", signinname);
          console.log(signinname);
        });
      }
    });
  });
});
