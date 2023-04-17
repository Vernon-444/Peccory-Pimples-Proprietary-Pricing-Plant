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
  // only logging for now, not adding to page
  // perhaps adding a sort function now, like sort by item.rating for item of filteredItems???
  console.log(filteredItems);
}

function clearAll() {
  // clears all currently selected filters by unchecking all inputs
  $('input:checked').prop('checked', false);
}
