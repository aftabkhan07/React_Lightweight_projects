/////   Below is the code to GET request

fetch('https://reqres.in/api/users')
    .then(res => {
        if (res.ok){
            return res.json()
        } else {
            return console.log("Unsuccessfull")
        }   
    })
    .then(data => console.log(data))
    .catch(error => console.log('Error'))
