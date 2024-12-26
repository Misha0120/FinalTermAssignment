document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById('product-container');

    // Custom jewelry data
    const products = [
        {
            id: 1,
            title: "Gold Necklace",
            description: "Elegant gold necklace with intricate design.",
            price: 1500,
            image: "https://i.ibb.co/c8WxX6P/6903be8f5bfe31590e0199fdebec3cf8.jpg"
        },
        {
            id: 2,
            title: "Diamond Ring",
            description: "Beautiful diamond ring with pure stones.",
            price: 2500,
            image: "https://i.ibb.co/4Vdx5Cc/69e5295e0ccb633f681ddbe0a23e945c.jpg"
        },
        {
            id: 3,
            title: "Silver Bracelet",
            description: "Minimal silver bracelet for everyday elegance.",
            price: 800,
            image: "https://i.ibb.co/FB6k1Fx/055d996c8ae5e94bb689750ce27891db.jpg"
        },
        {
            id: 4,
            title: "Pearl Earrings",
            description: "Classic pearl earrings for timeless beauty.",
            price: 1200,
            image: "https://i.ibb.co/R6t7XV5/489d0288839e2d47e6f6c21962b62310.jpg"
        },
        {
            id: 5,
            title: "Rose Gold Anklet",
            description: "Delicate anklet crafted from rose gold.",
            price: 900,
            image: "https://i.ibb.co/nnPgKKC/83d1ccac1175152833ac878f8da87563.jpg"
        },
        {
            id: 6,
            title: "Gemstone Pendant",
            description: "Vibrant gemstone pendant to add a pop of color.",
            price: 1100,
            image: "https://i.ibb.co/cxzwqTP/126ddb11e5479be2986f19161f867cca.jpg"
        },
        {
            id: 7,
            title: "Platinum Necklace",
            description: "Luxurious platinum necklace for grand occasions.",
            price: 3000,
            image: "https://i.ibb.co/BydPqP9/5638ba1c2f1377362197afcb0dedcad1.jpg"
        },
        {
            id: 8,
            title: "Chandelier Earrings",
            description: "Sparkling chandelier earrings for a dramatic touch.",
            price: 1800,
            image: "https://i.ibb.co/FhXZtWs/c97e7b50bc3e82fec74f2c0e09066117.jpg"
        },
        {
            id: 9,
            title: "Gold Bangles",
            description: "Traditional gold bangles with a modern twist.",
            price: 2000,
            image: "https://i.ibb.co/hL9jTDs/9d4f8df6c99c86419987ce094d99e066.jpg"
        },
        {
            id: 10,
            title: "Emerald Brooch",
            description: "Elegant brooch with a dazzling emerald centerpiece.",
            price: 1500,
            image: "https://i.ibb.co/VDPWK9c/8e19b5c4a91b31089c338b709210bd83.jpg"
        },
        {
            id: 11,
            title: "Sapphire Pendant",
            description: "Elegant sapphire pendant in a sterling silver setting.",
            price: 2200,
            image: "https://i.ibb.co/4f0792P/94b7096bba942d48060780095c2577a0.jpg"
        },
        {
            id: 12,
            title: "Opal Ring",
            description: "Mystical opal ring with a unique color-changing effect.",
            price: 1600,
            image: "https://i.ibb.co/8NjhtTJ/65efbb699424df85e2d729b0c3100eae.jpg"
        },
        {
            id: 13,
            title: "Turquoise Bracelet",
            description: "Handcrafted turquoise bracelet with intricate silver detailing.",
            price: 1100,
            image: "https://i.ibb.co/PGZb5wc/6162e4c6cf407254732321105c4951ea.jpg"
        },
        {
            id: 14,
            title: "Amethyst Earrings",
            description: "Beautiful amethyst earrings set in sterling silver.",
            price: 1400,
            image: "https://i.ibb.co/QHs8R0K/191dd37f1449ae124516c7a6a6b94ce0.jpg"
        },
        {
            id: 15,
            title: "Gold Hoop Earrings",
            description: "Classic gold hoop earrings, perfect for everyday wear.",
            price: 950,
            image: "https://i.ibb.co/ySG7BJm/60a399053d02e8bd5b53260f80eaad71.jpg"
        },
        {
            id: 16,
            title: "Vintage Charm Necklace",
            description: "A vintage-style necklace with multiple charming pendants.",
            price: 1800,
            image: "https://i.ibb.co/mBsRR6H/e213e04711ed0ef4f7324e5b8fa3e957.jpg" // Correct image URL
        }
    ];



    // Dynamically create product cards
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-md-4 col-sm-6 col-lg-3 d-flex align-items-stretch';

        card.innerHTML = `
            <div class="card shadow-sm d-flex flex-column">
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
        alert(`Welcome , ${userFound.userName}!`);
        window.location.href = "home.html";
    } else {
        alert("Incorrect email or password");
    }

    document.getElementById("loginForm").reset();
}

