//////   Below is the code for POST request

fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        name: 'USER Aftab'
    })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error'))