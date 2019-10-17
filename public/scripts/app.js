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

const onSuccess = ()=>{
    console.log('success')
};

const onError = ()=>{
    console.log('error')
};

const file = ()=>{
    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/api/v1/new-subscriber',
        data: {
            "email": $('#email').val(),
            "firstName": $('#firstName').val(),
            "lastName": $('#lastName').val(),
        },
        success: onSuccess,
        error: onError,
    })
};

const validate = ()=>{
    let valid = true
    event.preventDefault();
    $("#firstName").removeClass("is-invalid");
    $("#lastName").removeClass("is-invalid");
    $("#email").removeClass("is-invalid");

//  FIRST NAME ---------------------------------------------------------------------------------
    if ($("#firstName").val().length < 2 ) {
        $("#firstName").addClass("is-invalid");
        valid = false;
    }

    for (let i = 0; i < iChars.length; i++) {
        if ($("#firstName").val().includes(iChars[i]) === true) {     
            $("#firstName").addClass("is-invalid");
        } 
    }
    for (let i = 0; i < numbers.length; i++) {
        if ($("#firstName").val().includes(numbers[i]) === true) {     
            $("#firstName").addClass("is-invalid");
            valid = true;
        }

    }

// LAST NAME----------------------------------------------------------------------------------------
    if ($("#lastName").val().length < 2) {
        $("#lastName").addClass("is-invalid");
        valid  = false;
    }
    for (let i = 0; i < iChars.length; i++) {
        if ($("#lastName").val().includes(iChars[i]) === true) {     
           $("#lastName").addClass("is-invalid");
           valid = false } 
    }
    for (let i = 0; i < numbers.length; i++) {
        if ($("#lastName").val().includes(numbers[i]) === true) {     
            $("#lastName").addClass("is-invalid");
            valid = false;
        }
    }

// EMAIL --------------------------------------------------------------------------------------------

    if ($("#email").val().includes("@") === false) {     
           $("#email").addClass("is-invalid");
           valid = false;
    }

    if ($("#email").val().includes(".") === false) {     
        $("#email").addClass("is-invalid");
        valid = false;
    }

// SUBSCRIPTIONS ------------------------------------------------------------------------------------

    if ($(".subscription-button").hasClass("selected")===false) {
        $("#subscriptions").addClass("is-invalid");
        valid = false;
        
    }
    if(valid===true){
        $('#exampleModal').modal('toggle');
        $('#exampleModal').modal('show');
        $('#exampleModal').modal('hide');

    }
    file();
}


$("#submit").on("click", validate)



//----------------------Event Listener