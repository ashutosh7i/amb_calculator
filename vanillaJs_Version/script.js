const ambRequired = document.getElementById("ambRequired");
const totalClosingBalance = document.getElementById("totalClosingBalance");
const averageMonthlyBalance = document.getElementById("averageMonthlyBalance");
const isAverageMonthlyBalanceMaintained = document.getElementById(
  "isAverageMonthlyBalanceMaintained"
);
var textareas = document.querySelectorAll("textarea:not(#ambRequired)");

function sumTotalClosingBalance() {
  let sum = 0;
  textareas.forEach((textarea) => {
    sum += parseFloat(textarea.value) || 0;
  });
  return sum;
}

// Add an input event listener to each textarea
textareas.forEach((textarea) => {
  textarea.addEventListener("input", (e) => {
    const totalBalance = sumTotalClosingBalance();
    totalClosingBalance.innerHTML = totalBalance.toFixed(2);

    const avgBalance = (totalBalance / 30).toFixed(2);
    averageMonthlyBalance.innerHTML = avgBalance;

    // Compare numeric values and update isAverageMonthlyBalanceMaintained
    if (parseFloat(avgBalance) > parseFloat(ambRequired.value)) {
      isAverageMonthlyBalanceMaintained.innerHTML = "yes";
    } else {
      isAverageMonthlyBalanceMaintained.innerHTML = "no";
    }
  });9
});

// Initialize the values on page load
totalClosingBalance.innerHTML = sumTotalClosingBalance().toFixed(2);
averageMonthlyBalance.innerHTML = (sumTotalClosingBalance() / 30).toFixed(2);
