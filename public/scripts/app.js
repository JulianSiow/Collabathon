let iChars = ["˜", "`", "!", "#", "$", "%", "ˆ", "&", "*", "+", "=", "-", "_", "[", "]", "/", ";", ":", ",", "{", "}", "|", "<", ">", "?", "!"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

$(".subscription-button").on("click", ()=>{
    event.preventDefault();
    if($(event.target).hasClass("selected")) {
        $(event.target).removeClass("selected")
    }
    else {$(event.target).addClass("selected")}
});

$(".frequency-button").on("click", ()=>{
    event.preventDefault();
    $(".frequency-button").removeClass("selected");
    $(event.target).addClass("selected");
});

$("#submit").on("click", ()=>{
    event.preventDefault();
    $("#firstName").removeClass("is-invalid");
    $("#lastName").removeClass("is-invalid");
    $("#email").removeClass("is-invalid");

//  FIRST NAME ---------------------------------------------------------------------------------
    if ($("#firstName").val().length < 2 ) {
        $("#firstName").addClass("is-invalid");
    }

    for (let i = 0; i < iChars.length; i++) {
        if ($("#firstName").val().includes(iChars[i]) === true) {     
            $("#firstName").addClass("is-invalid");
        }
    }
    for (let i = 0; i < numbers.length; i++) {
        if ($("#firstName").val().includes(numbers[i]) === true) {     
            $("#firstName").addClass("is-invalid");
        }
    }

// LAST NAME----------------------------------------------------------------------------------------
    if ($("#lastName").val().length < 2) {
        $("#lastName").addClass("is-invalid");
    }
    for (let i = 0; i < iChars.length; i++) {
        if ($("#lastName").val().includes(iChars[i]) === true) {     
           $("#lastName").addClass("is-invalid");
           }
    }
    for (let i = 0; i < numbers.length; i++) {
        if ($("#lastName").val().includes(numbers[i]) === true) {     
            $("#lastName").addClass("is-invalid");
        }
    }

// EMAIL --------------------------------------------------------------------------------------------

    if ($("#email").val().includes("@") === false) {     
           $("#email").addClass("is-invalid");
    }

    if ($("#email").val().includes(".") === false) {     
        $("#email").addClass("is-invalid");
    }

// SUBSCRIPTIONS ------------------------------------------------------------------------------------

    if ($(".subscription-button").hasClass("selected")===false) {
        $("#subscriptions").addClass("is-invalid");
    }
}
)



//----------------------Event Listener