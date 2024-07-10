function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name: userName, email: userEmail})
    })
        .then((response) => response.json())
        .then((object) => console.log(object))
        .catch((error) => {

        const body = document.querySelector('body');
//create a div to display the error
      const errorNotify = document.createElement('div');
      errorNotify.textContent = `Error: ${error.message}`;
      
      body.appendChild(errorNotify);
});
}
submitData('yoh', 'yoh@gmail.com').then(() => console.log('Just checking'));