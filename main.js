$(".product > div:not(:first-child)").toggle();
$(".expand-product-button").on("click", function() {
    expandProduct(this);
});

function toggleMenu() {
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
    $(productElement).parent().parent().parent().children(":not(:first-child)").slideToggle(200);
    if ($(productElement).html() === "add_circle") {
        $(productElement).html("remove_circle");
    } else {
        $(productElement).html("add_circle");
    }
}


/**
 * @param {number} id 
 * @param {string} name 
 * @param {number} price 
 * @param {number} inventory 
 * @param {number} orders 
 */
function createNewProduct(id, name, price, inventory, orders) {
    const parentComponent = document.querySelector(".products.component"); 
    const productElement = document.createElement("div"); 
    productElement.classList.add("product"); 
    parentComponent.append(productElement); 
    const headerElement = document.createElement("div");
    productElement.append(headerElement);
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
    productElement.append(createProductField("Inventory", inventory));
    productElement.append(createProductField("Orders", orders));

    $(productElement).children("div:not(:first-child)").toggle();
}

/**
 * @param {string} name 
 * @param {string} value 
 * @return {HTMLElement} 
 */
function createProductField(name, value) {
    const fieldElement = document.createElement("div");
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