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
                <div class="card shadow-sm d-flex flex-column style= "">
                    <img 
                        src="${product.image}" 
                        class="card-img-top" 
                        alt="${product.title}" 
                        style="object-fit: contain; object-position: center; width: 100%; height: 200px; background-color: #f6f2f1;"
                    >
                    <div class="card-body d-flex flex-column" style="flex-grow: 1;">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text" style="height: 60px; overflow: hidden; text-overflow: ellipsis; font-size: 0.9rem;">${product.description}</p>
                        <p class="fw-bold">$${product.price}</p>
                        <button class="btn btn-beige mt-auto" style="background-color: #f5e7dc; color: #1c1c24; border: none;">Add to Cart</button>
                    </div>
                </div>
            `;
            
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

