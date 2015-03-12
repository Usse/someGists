pricing = {
  // VIPs are awesome. Give them 50% off.
  'VIP': 0.50,

  // Preferred customers are no VIPs, but they still get 25% off.
  'Preferred': 0.75,

  // No discount for other customers.
  'Regular': 1.0
}


function getItemPricing(customer, item) {
  if (pricing[customer.type])
    return item.price * item.quantity * pricing[customer.type];
  else
    return item.price * item.quantity * pricing.Regular;
}
