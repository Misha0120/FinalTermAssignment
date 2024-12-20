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
