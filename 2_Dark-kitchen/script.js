const menuContainer = document.querySelector('.menu-container');

const cartIcon = document.createElement('div');
cartIcon.className = 'cart-icon';
document.body.appendChild(cartIcon);

const hamburgerCollection = [
    {
        id: 1,
        picture: '../img/hamburger1.png',
        name: 'Classic Burger',
        ingredients: ['Beef patty', 'lettuce', 'tomato', 'onion', 'pickles', 'cheddar cheese', 'ketchup', 'mustard', 'mayonnaise', 'sesame seed bun'],
        price: '€7.99', // Example price in dollars
        calories: 600 // Example calorie count
    },
    {
        id: 2,
        picture: '../img/hamburger1.png',
        name: 'Cheeseburger',
        ingredients: ['Beef patty', 'cheddar cheese', 'lettuce', 'tomato', 'onion', 'pickles', 'ketchup', 'mustard', 'mayonnaise', 'sesame seed bun'],
        price: '€8.49',
        calories: 650
    },
    {
        id: 3,
        picture: '../img/hamburger1.png',
        name: 'Bacon Burger',
        ingredients: ['Beef patty', 'bacon strips', 'lettuce', 'tomato', 'onion', 'pickles', 'cheddar cheese', 'ketchup', 'mustard', 'mayonnaise', 'sesame seed bun'],
        price: '€9.99',
        calories: 750
    },
    {
        id: 4,
        picture: '../img/hamburger1.png',
        name: 'Mushroom Swiss Burger',
        ingredients: ['Beef patty', 'sautéed mushrooms', 'Swiss cheese', 'lettuce', 'tomato', 'onion', 'pickles', 'ketchup', 'mustard', 'mayonnaise', 'sesame seed bun'],
        price: '€10.49',
        calories: 700
    },
    {
        id: 5,
        picture: '../img/hamburger1.png',
        name: 'BBQ Burger',
        ingredients: ['Beef patty', 'BBQ sauce', 'onion rings', 'cheddar cheese', 'lettuce', 'tomato', 'pickles', 'ketchup', 'mustard', 'mayonnaise', 'sesame seed bun'],
        price: '€9.99',
        calories: 800
    },
    {
        id: 6,
        picture: '../img/hamburger1.png',
        name: 'Veggie Burger',
        ingredients: ['Veggie patty', 'lettuce', 'tomato', 'onion', 'pickles', 'cheddar cheese', 'ketchup', 'mustard', 'mayonnaise', 'whole wheat bun'],
        price: '€7.49',
        calories: 500
    },
    {
        id: 7,
        picture: '../img/hamburger1.png',
        name: 'Chicken Burger',
        ingredients: ['Grilled or fried chicken breast', 'lettuce', 'tomato', 'onion', 'pickles', 'cheddar cheese', 'mayonnaise', 'honey mustard sauce', 'sesame seed bun'],
        price: '€8.99',
        calories: 700
    },
    {
        id: 8,
        picture: '../img/hamburger1.png',
        name: 'Fish Burger',
        ingredients: ['Breaded and fried fish fillet', 'lettuce', 'tomato', 'onion', 'pickles', 'tartar sauce', 'sesame seed bun'],
        price: '€9.49',
        calories: 600
    }
  ];

  const shoppingCart = [];

  function updateCartIcon() {
    cartIcon.textContent = shoppingCart.length;
}
function addToCart(hamburgerId) {
    console.log('Adding to cart:', hamburgerId);
    // Rest of your addToCart logic
}

hamburgerCollection.forEach(hamburgers => {
    const card = document.createElement('article');
    card.className ='card';

    const img = document.createElement('img');
    img.src = hamburgers.picture;
    img.alt = hamburgers.name;
    img.className = 'card-image';

    const cardInfo = document.createElement('article');
    cardInfo.className = 'card-info';

    const title = document.createElement('h2');
    title.className = 'title'
    title.textContent = hamburgers.name;

    const ingredients = document.createElement('p');
    ingredients.className = 'ingrediënts';
    ingredients.innerHTML = `<strong>Ingrediënts:</strong> ${hamburgers.ingredients.join(', ')}`;

    const price = document.createElement('p');
    price.className = 'price'
    price.textContent = `Price: ${hamburgers.price}`;

    const calories = document.createElement('p');
    calories.innerHTML = `<strong>Calories: </strong>${Array.isArray(hamburgers.calories) ? hamburgers.calories.join(', ') : hamburgers.calories}`;

    // Inside the forEach loop where you create cards
    const selectButton = document.createElement('button');
    selectButton.textContent = 'Add to Cart';
    selectButton.className = 'select-button';
    selectButton.addEventListener('click', () => {
        addToCart(hamburgers.id); // Make sure hamburgers.id is valid and unique
        updateCartIcon();
    });

    // const buy = document.createElement('a');
    // trailer.href = hamburgers.buy;
    // trailer.textContent = 'Eat me';
    // trailer.className = 'btn';

    cardInfo.appendChild(title);
    cardInfo.appendChild(ingredients);
    cardInfo.appendChild(calories);
    cardInfo.appendChild(price);
    cardInfo.appendChild(selectButton);

    card.appendChild(img);
    card.appendChild(cardInfo);

    menuContainer.append(card);
 });

function checkout() {
    // Process the items in the shopping cart (e.g., calculate total price, display confirmation, etc.)
    console.log('Checkout:', shoppingCart);
}
