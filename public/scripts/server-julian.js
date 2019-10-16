userNumber = 0;
const onSuccess = (response) => {
    console.log(response.data)
    response.data.forEach((subscriber) => {
        userNumber += 1
        const nameTemplate = `
        <tr>
          <th scope="row">${userNumber}</th>
          <td>${subscriber.firstName}</td>
          <td>${subscriber.lastName}</td>
          <td>${subscriber.email}</td>
        </tr>
        `;
        $('tbody').append(nameTemplate);
    })
}

const onError = () =>{
    console.log(error)
}

$.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/v1/subscribers',
    data: $('form').serialize(),
    success: onSuccess,
    error: onError,
})





// working form submit SECTION 
// const onSuccess = ()=>{
//     console.log('success')
// }
// const onError = ()=>{
//     console.log('error')
// }

// const file = ()=>{
//     $.ajax({
//         method: 'POST',
//         url: 'http://localhost:3000/api/v1/new-subscriber',
//         data: {
//             "email": $('#email').val(),
//             "firstName": $('#firstName').val(),
//             "lastName": $('#lastName').val(),
//         },
//         success: onSuccess,
//         error: onError,
//     })
// }


// const handleSubscribe = function(event){
//     event.preventDefault();
//     file();
// }

// //----------------------Event Listener
// $('form').on('submit', handleSubscribe)