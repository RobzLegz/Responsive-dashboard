// Check if jQuery is working
console.log("jQuery version: " + $().jquery);

// Collapse all products initially for mobile
// Select all details for products (gray divs) and hide them with .toggle();
$(".product > div:not(:first-child)").toggle();

// Select the blue "+" button and add click event.
$(".expand-product-button").on("click", function() {
    expandProduct(this);
});



function toggleMenu() {
    // find the menu element && find the menu button element
    // assign these elements to variables 

    // "let" - start creating a new variable
    // "menu" - name of your variable (whatever u want)
    let menu = document.querySelector("aside");
    let menuButton = document.querySelector(".menu-button");

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        menuButton.innerHTML = "close";
    } else {
        menuButton.innerHTML = "menu";
    }
}

function expandProduct(productElement) {
    // .parent() - element upwards
    // .children("???") - element downwards (optional selector)
    $(productElement).parent().parent().parent().children(":not(:first-child)").slideToggle(200);

    // Write a if statement, that changes button between
    // "add_circle" and "remove_circle"
    if ($(productElement).html() === "add_circle") {
        $(productElement).html("remove_circle");
    } else {
        $(productElement).html("add_circle");
    }
}


/**
 * Create a new product and add it to the list.
 * @param {number} id Unique identifier
 * @param {string} name Name of the product
 * @param {number} price Price of the product
 * @param {number} inventory How many products are in storage
 * @param {number} orders How many products have been sold
 */
function createNewProduct(id, name, price, inventory, orders) {
    const parentComponent = document.querySelector(".products.component"); //select the product container element
    const productElement = document.createElement("div"); // Creates a new html <div> element
    productElement.classList.add("product"); // Give "product" class to the new <div> element
    parentComponent.append(productElement); // Add the "productElement" inside "parentComponent"

    // TODO:
    // 1] Create a div and assign it to headerElement constant (new)
    // 2] Add the headerElement inside productElement
    const headerElement = document.createElement("div");
    productElement.append(headerElement);

    // TODO:
    // 1] Create 2 divs and assign it to idElement and nameElement constants
    // 2] Add the both elements to headerElement
    // 3] set innerHTML as equal to the id parameter and name parameter.
    // 4] Extra + button element as well
    const idElement = document.createElement("div");
    const nameElement = document.createElement("div");
    const buttonElement = document.createElement("div");
    idElement.innerHTML = "#" + id;
    nameElement.innerHTML = name;
    buttonElement.innerHTML = "<i class='material-icons expand-product-button'>add_circle</i>";
    headerElement.append(idElement, nameElement, buttonElement);

    buttonElement.addEventListener("click", function() {
        expandProduct(buttonElement.querySelector("i"));
    });

    productElement.append(createProductField("Price", "€" + price));
    // TODO: Create a "Inventory" and "Order" field for the product.
    productElement.append(createProductField("Inventory", inventory));
    productElement.append(createProductField("Orders", orders));

    $(productElement).children("div:not(:first-child)").toggle();
}

/**
 * Create a new field that will be shown when the product element is expanded.
 * @param {string} name Name of the field
 * @param {string} value Value of the field
 * @return {HTMLElement} Field element
 */
function createProductField(name, value) {
    const fieldElement = document.createElement("div");

    // TODO:
    // 1] Create nameElement and valueElement
    // 2] Add both elements to fieldElement
    // 3] Change the text inside the elements to the values in passed parameters
    const nameElement = document.createElement("div");
    const valueElement = document.createElement("div");
    fieldElement.append(nameElement, valueElement);
    nameElement.innerHTML = name;
    valueElement.innerHTML = value;

    return fieldElement;
}

createNewProduct(1, "Americano", "1.00", 10, 99);
createNewProduct(2, "Cappuccino", "2.00", 43, 54);
createNewProduct(3, "Late", "2.00", 123, 434);
createNewProduct(4, "Green Tea", "0.50", 123, 777);