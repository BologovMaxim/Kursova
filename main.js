
const products = [
    {
        id: 1,
        name: "asakura Dynasty s84 T-shirt",
        price: "40 $ // 1650 ₴",
        description: "朝倉朝の遺産は、日本の文化、統治、軍事戦略への貢献を通じて受け継がれています。",
        image: "images/шмотки/asakura Dynasty/asakura Dynasty s84 T-shirt/футболка перед (4).png",
        front: "images/шмотки/asakura Dynasty/asakura Dynasty s84 T-shirt/футболка перед (4).png",
        back: "images/шмотки/asakura Dynasty/asakura Dynasty s84 T-shirt/футболка спина (2).png",
        collection: "asakura"
    },
    {
        id: 2,
        name: "elegia jacket",
        price: "155 $ // 6500 ₴",
        description: "Elegia was based on the life ideal of the ancient Greeks...",
        image: "images/шмотки/elegia/elegia jacket/куртка перед (2).png",
        front: "images/шмотки/elegia/elegia jacket/куртка перед (2).png",
        back: "images/шмотки/elegia/elegia jacket/куртка спина.png",
        collection: "elegia"
    },
    {
        id: 3,
        name: "elem3ntasonic longsleeve",
        price: "63 $ // 2600 ₴",
        description: "Sizes: 1.65< M, 1.70+ L, 1.8+ XL",
        image: "images/шмотки/Elem3ntasonic/elem3ntasonic longsleeve/лонг перед новый (1).png",
        front: "images/шмотки/Elem3ntasonic/elem3ntasonic longsleeve/лонг перед новый (1).png",
        back: "images/шмотки/Elem3ntasonic/elem3ntasonic longsleeve/лонг спина (1).png",
        collection: "elementasonic"
    },
    {
        id: 4,
        name: "enemy system t-shirt",
        price: "42 $ // 1700 ₴",
        description: "あなた自身が敵なのです。",
        image: "images/шмотки/enemy/enemy system t-shirt/футболка перед (6).png",
        front: "images/шмотки/enemy/enemy system t-shirt/футболка перед (6).png",
        back: "images/шмотки/enemy/enemy system t-shirt/футболка спина (3).png",
        collection: "enemy"
    },
    {
        id: 5,
        name: "vesper longsleeve",
        price: "65 $ // 2600 ₴",
        description: "Vesper is evening: not the end, but a pause.",
        image: "images/шмотки/Vesper/vesper longsleeve/перед (6).png",
        front: "images/шмотки/Vesper/vesper longsleeve/перед (6).png",
        back: "images/шмотки/Vesper/vesper longsleeve/спина (6).png",
        collection: "vesper"
    },
    {
        id: 6,
        name: "asakura Dynasty s84 Longsleeve",
        price: "60 $ // 2450 ₴",
        description: "朝倉朝の遺産は...",
        image: "images/шмотки/asakura Dynasty/asakura Dynasty s84 Longsleeve/лонг перед2.png",
        front: "images/шмотки/asakura Dynasty/asakura Dynasty s84 Longsleeve/лонг перед2.png",
        back: "images/шмотки/asakura Dynasty/asakura Dynasty s84 Longsleeve/лонг спина2.png",
        collection: "asakura"
    },
    {
        id: 7,
        name: "asakura Dynasty s84 Shorts",
        price: "50 $ // 2100 ₴",
        description: "朝倉朝の遺産は...",
        image: "images/шмотки/asakura Dynasty/asakura Dynasty s84 Shorts/шорты перед.png",
        front: "images/шмотки/asakura Dynasty/asakura Dynasty s84 Shorts/шорты перед.png",
        back: "images/шмотки/asakura Dynasty/asakura Dynasty s84 Shorts/шорты спина.png",
        collection: "asakura"
    },
    {
        id: 8,
        name: "elegia longsleeve",
        price: "85 $ // 3500 ₴",
        description: "Elegia was based on the life ideal...",
        image: "images/шмотки/elegia/elegia longsleeve/elegia лонг перед.png",
        front: "images/шмотки/elegia/elegia longsleeve/elegia лонг перед.png",
        back: "images/шмотки/elegia/elegia longsleeve/elegia лонг спина.png",
        collection: "elegia"
    },
    {
        id: 9,
        name: "elegia socks w&b",
        price: "10 $ // 420 ₴",
        description: "two pairs in a pack",
        image: "images/шмотки/elegia/elegia socks w&b/носки (1).png",
        front: "images/шмотки/elegia/elegia socks w&b/носки (1).png",
        back: "images/шмотки/elegia/elegia socks w&b/носки белые (1).png",
        collection: "elegia"
    },
    {
        id: 10,
        name: "elegia t-shirt",
        price: "38 $ // 1600 ₴",
        description: "Elegia was based on the life ideal...",
        image: "images/шмотки/elegia/elegia t-shirt/elegia футболка перед.png",
        front: "images/шмотки/elegia/elegia t-shirt/elegia футболка перед.png",
        back: "images/шмотки/elegia/elegia t-shirt/elegia футболка спина.png",
        collection: "elegia"
    },
    {
        id: 11,
        name: "elem3ntasonic jersey blue",
        price: "55 $ // 2300 ₴",
        description: "Sizes: 1.65< M, 1.70+ L, 1.75+ XL, 1.85+ XXL",
        image: "images/шмотки/Elem3ntasonic/elem3ntasonic jersey blue/синее спереди (1).png",
        front: "images/шмотки/Elem3ntasonic/elem3ntasonic jersey blue/синее спереди (1).png",
        back: "images/шмотки/Elem3ntasonic/elem3ntasonic jersey blue/синее сзади (1).png",
        collection: "elementasonic"
    },
    {
        id: 12,
        name: "elem3ntasonic jersey pink",
        price: "55 $ // 2300 ₴",
        description: "Sizes: 1.65< M, 1.70+ L, 1.75+ XL, 1.85+ XXL",
        image: "images/шмотки/Elem3ntasonic/elem3ntasonic jersey pink/розовое спереди (1).png",
        front: "images/шмотки/Elem3ntasonic/elem3ntasonic jersey pink/розовое спереди (1).png",
        back: "images/шмотки/Elem3ntasonic/elem3ntasonic jersey pink/розовое сзади (1).png",
        collection: "elementasonic"
    },
    {
        id: 13,
        name: "enemy system hoodie black",
        price: "100 $ // 4200 ₴",
        description: "あなた自身が敵なのです。",
        image: "images/шмотки/enemy/enemy system hoodie black/черный плюш перед.png",
        front: "images/шмотки/enemy/enemy system hoodie black/черный плюш перед.png",
        back: "images/шмотки/enemy/enemy system hoodie black/черный плюш спина.png",
        collection: "enemy"
    },
    {
        id: 14,
        name: "enemy system hoodie white",
        price: "100 $ // 4200 ₴",
        description: "あなた自身が敵なのです。",
        image: "images/шмотки/enemy/enemy system hoodie white/белый перед.png",
        front: "images/шмотки/enemy/enemy system hoodie white/белый перед.png",
        back: "images/шмотки/enemy/enemy system hoodie white/белый спина.png",
        collection: "enemy"
    },
    {
        id: 15,
        name: "enemy system long sleeve",
        price: "55 $ // 2100 ₴",
        description: "あなた自身が敵なのです。",
        image: "images/шмотки/enemy/enemy system long sleeve/черный лонг перед.png",
        front: "images/шмотки/enemy/enemy system long sleeve/черный лонг перед.png",
        back: "images/шмотки/enemy/enemy system long sleeve/черный лонг спина.png",
        collection: "enemy"
    },
    {
        id: 16,
        name: "vesper hoodie",
        price: "90 $ // 3600 ₴",
        description: "Vesper is evening: awareness emerges.",
        image: "images/шмотки/Vesper/vesper hoodie/перед (2).png",
        front: "images/шмотки/Vesper/vesper hoodie/перед (2).png",
        back: "images/шмотки/Vesper/vesper hoodie/спина (2).png",
        collection: "vesper"
    }
];

const collections = [
    { id: "asakura", name: "ASAKURA DYNASTY", image: "images/шмотки/asakura Dynasty/asakura Dynasty s84 T-shirt/футболка перед (4).png" },
    { id: "elegia", name: "elegia", image: "images/шмотки/elegia/elegia jacket/куртка перед (2).png" },
    { id: "elementasonic", name: "Elem3ntasonic", image: "images/шмотки/Elem3ntasonic/elem3ntasonic longsleeve/лонг перед новый (1).png" },
    { id: "enemy", name: "enemy system", image: "images/шмотки/enemy/enemy system t-shirt/футболка перед (6).png" },
    { id: "vesper", name: "Vesper", image: "images/шмотки/Vesper/vesper longsleeve/перед (6).png" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentProductImages = [];
let currentIndex = 0;

function toggleCart() {
    const sidebar = document.getElementById("cartSidebar");
    if (!sidebar) return;
    sidebar.classList.toggle("active");
    document.body.classList.toggle("cart-open");
}

function renderCart() {
    const cartItems = document.getElementById("cartItems");
    if (!cartItems) return;

    const currentData = JSON.parse(localStorage.getItem("cart")) || [];

    if (typeof cart !== 'undefined') {
        cart = currentData;
    }

    cartItems.innerHTML = currentData.length === 0 ? "<p>Your cart is empty</p>" : "";

    currentData.forEach((item, index) => {
        const qty = item.quantity || 1;
        const quantityLabel = qty > 1 ? `<span class="cart-quantity">x${qty}</span>` : "";

        cartItems.innerHTML += `
        <div class="cart-item">
            <img src="${item.image}" width="50">
            <div class="cart-item-info">
                <p>${item.name} ${quantityLabel}</p>
                <p>${item.price}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">✕</button>
        </div>`;
    });
}

function addToCartById(id) {
    const product = products.find(p => p.id == id);
    if (!product) return;

    let currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = currentCart.find(item => item.id == id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        currentCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));

    if (typeof cart !== 'undefined') {
        cart = currentCart;
    }

    renderCart();

    toggleCart(true);
    localStorage.setItem("wasCartUpdated", "true");
    if (document.getElementById("addBtn")) {
        changeButtonToAdded();
    }
}


function removeFromCart(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function updateMainImage() {
    const mainImg = document.getElementById("mainImage");
    if (mainImg && currentProductImages.length > 0) {
        mainImg.style.opacity = "0.5";
        setTimeout(() => {
            mainImg.src = currentProductImages[currentIndex];
            mainImg.style.opacity = "1";
        }, 100);
    }
}

function nextImage() {
    if (currentProductImages.length > 0) {
        currentIndex = (currentIndex + 1) % currentProductImages.length;
        updateMainImage();
    }
}

function prevImage() {
    if (currentProductImages.length > 0) {
        currentIndex = (currentIndex - 1 + currentProductImages.length) % currentProductImages.length;
        updateMainImage();
    }
}

function renderCollections() {
    const grid = document.getElementById("collectionGrid");
    if (!grid) return;
    grid.innerHTML = "";
    collections.forEach(col => {
        grid.innerHTML += `
        <div class="collection-card reveal" onclick="window.location.href='products.html?view=${col.id}'" style="cursor:pointer">
            <img src="${col.image}">
            <div class="collection-info"><h3>${col.name}</h3></div>
        </div>`;
    });
}

function renderProductsByCollection() {
    const grids = {
        asakura: document.getElementById("asakuraProducts"),
        elegia: document.getElementById("elegiaProducts"),
        elementasonic: document.getElementById("elementasonicProducts"),
        enemy: document.getElementById("enemyProducts"),
        vesper: document.getElementById("vesperProducts")
    };

    products.forEach(product => {
        const card = `
        <div class="product-card reveal">
            <div onclick="window.location.href='product.html?id=${product.id}'" style="cursor:pointer">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
            <button onclick="addToCartById(${product.id})">ADD TO CART</button>
        </div>`;
        if (grids[product.collection]) grids[product.collection].innerHTML += card;
    });

    reveal();
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal, .collection-title, .product-grid");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function openCollection(name) {
    const allTitles = document.querySelectorAll('.collection-title');
    const allGrids = document.querySelectorAll('.product-grid');

    if (name) {

        allTitles.forEach(t => t.style.display = 'none');
        allGrids.forEach(g => g.style.display = 'none');

        const selectedTitle = document.getElementById(name + "Title");
        const selectedGrid = document.getElementById(name + "Products");

        if (selectedTitle && selectedGrid) {
            selectedTitle.style.display = 'block';
            selectedGrid.style.display = 'grid';
            setTimeout(() => {
                selectedTitle.classList.add('active');
                selectedGrid.classList.add('active');
                selectedGrid.querySelectorAll('.product-card').forEach(c => c.classList.add('active'));
            }, 50);
        }
    } else {
        allTitles.forEach(t => t.style.display = 'block');
        allGrids.forEach(g => g.style.display = 'grid');

        const asakuraTitle = document.getElementById("asakuraTitle");
        const asakuraGrid = document.getElementById("asakuraProducts");
        if (asakuraTitle && asakuraGrid) {
            asakuraTitle.classList.add('active');
            asakuraGrid.classList.add('active');
            asakuraGrid.querySelectorAll('.product-card').forEach(c => c.classList.add('active'));
        }
    }
}

function changeButtonToAdded() {
    const btn = document.getElementById("addBtn");
    if (!btn) return;
    btn.innerText = "ADDED ✓";
    btn.disabled = true;
    btn.style.background = "black";
    btn.style.color = "white";
    btn.style.border = "1px solid white";
    btn.style.opacity = "1";
}

function renderCheckout() {
    const container = document.getElementById("checkoutItems");
    const totalDisplay = document.getElementById("totalAmount");

    if (!container) return;

    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    container.innerHTML = currentCart.length === 0 ? "<p>Ваш кошик порожній</p>" : "";

    currentCart.forEach(item => {
        const qty = item.quantity || 1;

        container.innerHTML += `
        <div class="checkout-item" style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; border-bottom: 1px solid #222; padding-bottom: 10px;">
        
            <img src="${item.image}" style="width: 70px; height: 70px; object-fit: cover;">
            <div>
                <h4 style="margin: 0; color: white;">${item.name} ${qty > 1 ? `<span style="color: #888;">x${qty}</span>` : ""}</h4>
                <p style="margin: 5px 0 0; color: #888;">${item.price}</p>
            </div>
        </div>`;


        const priceNum = parseInt(item.price);
        if (!isNaN(priceNum)) {
            total += priceNum * qty;
        }
    });

    if (totalDisplay) {
        totalDisplay.innerText = total + " $";
    }
}
function goCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    window.location.href = "checkout.html";
}

function openProduct(id) {
    window.location.href = "product.html?id=" + id;
}

document.addEventListener("DOMContentLoaded", () => {
    renderCart();
    renderCollections();
    renderProductsByCollection();
    renderCheckout();

    const params = new URLSearchParams(window.location.search);

    const selectedId = params.get("id");
    if (selectedId) {
        const product = products.find(p => p.id == selectedId);
        if (product && document.getElementById("productName")) {
            document.getElementById("productName").innerText = product.name;
            document.getElementById("productPrice").innerText = product.price;
            document.getElementById("productDescription").innerText = product.description;

            currentProductImages = [product.front, product.back];
            currentIndex = 0;
            const mainImg = document.getElementById("mainImage");
            if (mainImg) mainImg.src = currentProductImages[0];

            const fThumb = document.getElementById("frontThumb");
            const bThumb = document.getElementById("backThumb");
            if (fThumb) fThumb.src = product.front;
            if (bThumb) bThumb.src = product.back;

            const btn = document.getElementById("addBtn");
            if (btn) {
                btn.onclick = () => addToCartById(product.id);
                if (cart.some(item => item.id == product.id)) changeButtonToAdded();
            }
        }
    }

    const view = params.get('view');
    if (view) {
        setTimeout(() => openCollection(view), 100);
    } else if (document.getElementById("asakuraProducts")) {
        setTimeout(() => openCollection(), 100);
    }
    function toggleCart(isOpen) {
        const sidebar = document.getElementById("cartSidebar");
        if (!sidebar) return;

        if (isOpen === true) {
            sidebar.classList.add("open");
        } else if (isOpen === false) {
            sidebar.classList.remove("open");
        } else {

            sidebar.classList.toggle("open");
        }
    }

    const revealElements = () => {
        const reveals = document.querySelectorAll(".reveal, .collection-title, .product-grid, .product-card");
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("active");
            }
        });
    };

    window.addEventListener('pageshow', (event) => {
        const wasUpdated = localStorage.getItem("wasCartUpdated");

        if (wasUpdated === "true") {
            localStorage.removeItem("wasCartUpdated");
            window.location.reload();
        }
    });
    setTimeout(revealElements, 200);

    window.addEventListener("scroll", revealElements);
});
