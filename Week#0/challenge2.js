function calculatorTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log("Tip for $100 bill:", calculatorTip(100));

const bills = [50, 100, 200, 350];

const tips = bills.map((bill) => calculatorTip(bill));

const totals = bills.map((bill, index) => bill + tips[index]);

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);
