window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'purchase',
    'currency': 'USD',  // Replace with the appropriate currency
    'value': 100.00,    // Total transaction value (can include tax, shipping)
    'items': [{
        'item_name': 'Sample Product',  // Replace with actual item name
        'item_id': 'SKU12345',          // Replace with actual item ID or SKU
        'price': 50.00,                 // Item price
        'quantity': 2                   // Quantity purchased
    }]
});
