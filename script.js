// Total Balance

const balanceElement = document.getElementById("balance");

// Value Input

const valueInputElement = document.querySelector("input");

// Income/Expense

const selectElement = document.querySelector("select");

// Addition Button

const additionButtonElement = document.querySelector("footer button");

// Entry

const entryListElement = document.querySelector("section ul");

// Create function to add income or expense

function addEntry(amount, operation) {
  const listEntry = document.createElement("li");

  const listEntryValue = document.createElement("strong");
  listEntryValue.innerText = "$" + amount;

  const listEntryDescription = document.createElement("em");
  listEntryDescription.innerText = "Description";

  const listEntryOperator = document.createElement("span");

  if (operation === "income") {
    listEntryOperator.innerText = "+";
  } else if (operation === "expense") {
    listEntryOperator.innerText = "-";
  }

  listEntry.appendChild(listEntryDescription);
  listEntry.appendChild(listEntryOperator);
  listEntry.appendChild(listEntryValue);

  entryListElement.appendChild(listEntry);
}

// Add event listener to Add button

additionButtonElement.onclick = function () {
  const amount = valueInputElement.value;
  const operation = selectElement.value;

  addEntry(amount, operation);
};
