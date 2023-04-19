// import "bootstrap";
// ^^^ im confused by this?? its just creating an error

$(document).ready(function() {
  console.log(shoppeItems);
  // gets url parameters
  const urlParams = new URLSearchParams(window.location.search);
  const filter = urlParams.get('filter');
  // checks the correct filter from url filter parameter if exists
  if (filter) {
    $(`#${filter}`).prop('checked', true);
  }

  cart = loadCart();

  addListeners();
  filterItems();
})

function addListeners() {
  // run display items anytime a filters is selected or unselected, slices to not select the clear all button
  $('input').slice(0, 4).click(function() {
    filterItems();
  })
  // add clear all and display items to clear all button
  $('input').eq(4).click(function() {
    clearAll();
    filterItems();
  })
}

function filterItems() {
  // adds all selected filters to array allFilters
  allFilters = [];
  $('input:checked').each(function() {
    allFilters.push($(this).prop('id'));
  })
  console.log(allFilters);

  // create array to store all selected items after  filter
  filteredItems = [];
  
  // if all filters is empty then select all item types and add to filtereditems
  if (allFilters.length === 0) {
    for (let itemTypes of Object.values(shoppeItems)) {
      filteredItems.push(...itemTypes);
    }
  } else {
    // else select only chosen item types from filter to add to array
    for (itemType of allFilters) {
      filteredItems.push(...shoppeItems[itemType]);
    }
  }
  // perhaps adding a sort function here, like sort by item.rating for item of filteredItems???
  console.log(filteredItems);
  for (shopItem of filteredItems) {
    console.log(shopItem)
    addItem(shopItem);
  }
}

function clearAll() {
  // clears all currently selected filters by unchecking all inputs
  $('input:checked').prop('checked', false);
}

function addItem(item) {
  // Adds shop item to store container
  $('.store-container').append(`
    <div class="item-container">
      <div class="item-img-container">
        <img  class='item-img' src="${item.image}" id="">
        <img class='cart-icon' src="../images/icons/cart_icon.jpg" href="shoppingcart.html" id="item cart icon 1" title="add to cart">
      </div>
      <div class="item-name">${item.name}</div>
      <div class="item-price">${item.price}</div>
      <div class="item-description">${item.description}</div>
    </div>
  `);
}

function loadCart() {
  // loads cart from session storage, returns empty string if cart not found in storage
  cart = sessionStorage.getItem('cart');
  return (cart ? cart : '');
}
