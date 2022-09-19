let productsData = [
 
    {
      productName: "phone1",
      category: "Phones",
      price: 790.78,
      image: "image/mob1.png",
    },
    {
      productName: "watch1",
      category: "Watches",
      price: 4500.78,
      image: "image/watch1.png",
    },
    {
      productName: "suit1",
      category: "Suits",
      price: 690.78,
      image: "image/suit1.png",
    },
    {
      productName: "shoes1",
      category: "Shoes",
      price: 55.78,
      image: "image/shoes1.png",
    },
    {
      productName: "watch2",
      category: "Watches",
      price: 6800.78,
      image: "image/watch2.png",
    },

    {
      productName: "suit2",
      category: "Suits",
      price: 492.78,
      image: "image/suit2.png",
    },
    {
      productName: "shoes5",
      category: "Shoes",
      price: 892.78,
      image: "image/shoes5.png",
    },

    {
      productName: "suit4",
      category: "Suits",
      price: 528.88,
      image: "image/suit4.png",
    },

    {
      productName: "shoes2",
      category: "Shoes",
      price: 45.78,
      image: "image/shoes2.png",
    },
    {
      productName: "watch3",
      category: "Watches",
      price: 5406.78,
      image: "image/watch3.png",
    },
    {
      productName: "shoes3",
      category: "Shoes",
      price: 42.78,
      image: "image/shoes3.png",
    },

    {
      productName: "phone2",
      category: "Phones",
      price: 890.78,
      image: "image/mob2.png",
    },
    {
      productName: "shoes4",
      category: "Shoes",
      price: 744.78,
      image: "image/shoes4.png",
    },
    {
      productName: "phone3",
      category: "Phones",
      price: 999.99,
      image: "image/mob3.png",
    },
    {
      productName: "suit3",
      category: "Suits",
      price: 478.28,
      image: "image/suit3.png",
    },
    {
      productName: "phone4",
      category: "Phones",
      price: 820.78,
      image: "image/mob4.png",
    },
  ];

for (let i of productsData) {
  // Create Card
  let card = document.createElement("div");
  // Card Category - cards should be hidden onLoad
  card.classList.add("card", i.category, "hide");
  // Image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  // img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  // Container
  let container = document.createElement("div");
  container.classList.add("container");
  // Product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  // Price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);

  document.getElementById("productsData").appendChild(card);

}
// Card Filtering Selection
function filterProduct(value) {
  // Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  
  // select all cards
  let element = document.querySelectorAll(".card");
  // loop through all cards
  element.forEach((element) => {
    //displaying All products when 'All' Button is clicked
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      // check if element contains category class
      if (element.classList.contains(value)) {
        // display element based on category
        element.classList.remove("hide");
      } else {
        // hide other elements
        element.classList.add("hide");
      }
    }
  });
}
// ------------------------------------------------------
// search button click
document.getElementById("search").addEventListener("click", () => {
  // initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //looping through all elements
  elements.forEach((element, index) => {
    //checking if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //displaying matching cards
      cards[index].classList.remove("hide");
    } else {
      //hiding other cards
      cards[index].classList.add("hide");
    }
  });
})

// Initially display all products onload
window.onload = () => {
  filterProduct("all");
};
// ------------------------------------------------------
// Sorting ASC / DSC
var container = document.querySelector("#container");

function sortProducts(productsData) {
		
  productsData.forEach(function (i) {

    var div = document.createElement("div");

    var name = document.createElement("h4");
    name.innerHTML = i.productName;

    var price = document.createElement("h5");
    price.innerHTML = i.price;

    var image = document.createElement("img");
    image.src = i.image;
    
    div.append(image, name, price);
    container.append(div);
          
  });
}
function myFunction(select) {
  var x = document.getElementById("select").value;

  if (x == "l2h") {
     l2h(productsData);
  }else if (x == "h2l") {
     h2l(productsData);
  }}
function l2h(productsData) {
     // console.log(productsData);
     productsData.sort(function(a, b) {
          return a.price - b.price;
      })
      filterProduct("none");
      container.innerHTML = null;
      sortProducts(productsData);
  }
  function h2l(productsData) {
     // console.log(productsData);
     productsData.sort(function(a, b) {
          return b.price - a.price;
      })
      filterProduct("none");
      container.innerHTML = null;
      sortProducts(productsData);
  }