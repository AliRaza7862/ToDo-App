// Get the input element and list element
const input = document.getElementById("input");
const list = document.getElementById("list");

// Get the items from local storage
const items = JSON.parse(localStorage.getItem("items")) || [];

// Function to render the list
function renderList() {
  // Clear the list first
  list.innerHTML = "";

  // Loop through the items array and create a list item for each item
  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item} <button onclick="editItem(${index})">Edit</button> <button onclick="deleteItem(${index})">Delete</button>`;
    list.appendChild(li);
  });

  // Save the items to local storage
  localStorage.setItem("items", JSON.stringify(items));
}

// Function to add an item to the list
function addItem() {
  // Get the value from the input element
  const value = input.value.trim();

  // Add the value to the items array
  if (value) {
    items.push(value);

    // Render the list
    renderList();

    // Clear the input field
    input.value = "";
  }
}

// Function to edit an item in the list
function editItem(index) {
  // Get the current value of the item
  const value = items[index];

  // Prompt the user to enter a new value
  const newValue = prompt("Enter a new value:", value);

  // Update the item with the new value
  if (newValue) {
    items[index] = newValue;

    // Render the list
    renderList();
  }
}

// Function to delete an item from the list
function deleteItem(index) {
  // Remove the item from the items array
  items.splice(index, 1);

  // Render the list
  renderList();
}

// Render the initial list
renderList();
