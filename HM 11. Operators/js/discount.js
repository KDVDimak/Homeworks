let hasPromoCode = true;
let cartTotal = 35;
let isBlackFriday = true;

  let isDiscountApplied = cartTotal >= 100 && hasPromoCode || isBlackFriday

  if ( isDiscountApplied === true ){
            console.log("Знижка застосована")
  } else console.log("Знижка не застосована")

  let noDiscount = cartTotal = !isDiscountApplied;

  if ( noDiscount === true ){
            console.log("Знижка не застосована");}

