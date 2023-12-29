function addPlayer(name, height, nationality, weight, amount) {
    var name = name
    var height = height
    var nationality = nationality
    var weight = weight
    var amount = amount

    // Create player object
    var newPlayer = {
        "name": name,
        "position": "CF",
        "height": height,
        "nationality": nationality,
        "weight": weight,
        "user": "658bc1437b708a916818b14e",  // You may need to dynamically set the user ID
        // "amount": amount
    };
    console.log("amount: ",amount);

    // Make AJAX request to create or add a new player
    fetch('http://127.0.0.1:2222/api/player/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlayer),
    })
        .then(response => {
            if (!response.ok) {
                showModal("Cannot add more than 7 Players")
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            window.location.reload()
        })
        .then(data => {
            // Handle the response data as needed
            console.log(data);

        })
        .catch(error => console.error('Error:', error));
}


function showModal(message) {
    // Set the modal message
    document.getElementById('modalMessage').innerText = message;

    // Show the modal
    $('#errorModal').modal('show');
}

function closeModal() {
    $('#errorModal').modal('hide');
}
