let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

    let total = 0 ;
console.log (`${"QTY".padEnd(8," ")}${"ITEM".padEnd(17, " ")}TOTAL`);
let {itemName, quantity, unitPrice} = order;

order.forEach(item => {
  console.log (`${item.quantity}\t${item.itemName.padEnd(18, " ")}${item.unitPrice*item.quantity}`);
  
    total += item.unitPrice*item.quantity
});

const star = "*"
  console.log(star.repeat(40));
  console.log(`${"Total = ".padEnd(25, " ")+total}\n***` );

