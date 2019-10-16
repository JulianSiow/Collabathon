


$ajax({
    method: 'POST',
    url: 'api/v1/subscribers',
    data: {
        email: $('#email').val(),
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val()
    },
    success: onSuccess,
    error: onError,
})