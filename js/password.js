$(document).ready(function() {
    var psw = document.getElementById("psw");
    $("#psw").keyup(function(e) {

        psw = this.value;
        var regex = /[!#$%&’*+/=?^_`{|}~-]+/;
        var number = /[0-9]+/gm;
        var lowercase = /[A-Z]+/gm;
        var uppercase = /(?=.*[a-z])/gm;


        if (lowercase.test(psw) == true) {
            $("#one").css("background-color", "#42ff9e")

        }
        if (uppercase.test(psw) == true) {
            $("#three").css("background-color", "#42ff9e")
        }
        if (number.test(psw) == true) {
            $("#two").css("background-color", "#42ff9e")
        }
        if (regex.test(psw) == true) {
            $("#four").css("background-color", "#42ff9e")
        }
        if (psw.length >= 8) {
            $("#five").css("background-color", "#42ff9e")

            $("#email").focus()
        }

    })

});