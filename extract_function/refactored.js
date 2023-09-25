function printOwing(invoice) {
  printBanner();
  recordDueDate(invoice);
  printDetails(invoice);
}

function printBanner() {
  console.log("*******************");
  console.log("***Customer Owes***");
  console.log("*******************");
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth,
    today.getDate() + 30
  );
}

function printDetails(invoice) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${calculateOutStanding(invoice)}`);
  console.log(`due: ${invoice.dueDate.toLocalDateString}`);
}

function calculateOutStanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}
