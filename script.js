document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById('product-container');

    const apiURL = 'https://fakestoreapi.com/products';

    fetch(apiURL)
        .then(response => response.json())
        .then(products => {

            products.forEach(product => {
            
                const card = document.createElement('div');
                card.className = 'col-md-4 col-sm-6 col-lg-3 d-flex align-items-stretch';

                card.innerHTML = `
                    <div class="card shadow-sm">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text text-truncate" style="max-height: 3em;">${product.description}</p>
                            <p class="fw-bold">$${product.price}</p>
                            <button class="btn btn-primary mt-auto">Add to Cart</button>
                        </div>
                    </div>
                `;

                // Append the card to the parent div
                productContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching products:", error);
            productContainer.innerHTML = `<p class="text-danger text-center">Failed to load products. Try again later.</p>`;
        });
});
function signupFunc() {
    let usersArray = JSON.parse(localStorage.getItem("users")) || [];

    const userEamil = document.getElementById("email").value;
    const userPass = document.getElementById("password").value;
    const userName = document.getElementById("userName").value;

    for (let user of usersArray) {
        if (user.userEamil === userEamil) {
            alert("Email already in use");
            return;
        }
    }

    const userObj = {
        userName: userName,
        userEamil: userEamil,
        userPass: userPass
    };

    usersArray.push(userObj);
    localStorage.setItem("users", JSON.stringify(usersArray));

    document.getElementById("signupForm").reset();
    alert("Signed up successfully");
}

function loginFunc() {
    let usersArray = JSON.parse(localStorage.getItem("users")) || [];

    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    let userFound = usersArray.find(user => user.userEamil === loginEmail && user.userPass === loginPassword);

    if (userFound) {
        alert(`Welcome back, ${userFound.userName}!`);
        window.location.href = "home.html";
    } else {
        alert("Incorrect email or password");
    }

    document.getElementById("loginForm").reset();
}
