const onSuccess = ()=>{
    console.log('success')
}
const onError = ()=>{
    console.log('error')
}

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
}


const handleSubscribe = function(event){
    event.preventDefault();
    file();
}


//----------------------Event Listener
$('form').on('submit', handleSubscribe)