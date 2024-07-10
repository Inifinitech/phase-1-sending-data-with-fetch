const body = document.querySelector('body');

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
        .then((object) => {
            console.log(object);
        const idmes = object.id
        const idAppender = document.createElement('div');
        idAppender.textContent = `ID: ${idmes}`;
        body.appendChild(idAppender)
})
        .catch((error) => {

//create a div to display the error
      const errorNotify = document.createElement('div');
      errorNotify.textContent = `Error: ${error.message}`;
      
      body.appendChild(errorNotify);
});
}
