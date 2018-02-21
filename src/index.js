// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var cash = currency,
        obj = {};
  if (currency > 10000){
    var obj ={
      error: "You are rich, my friend! We don't have so much coins for exchange"
    };
  } else{
      H = Math.floor(cash/50);
      if (H > 0){obj.H = H};
      cash = cash - 50 * Math.floor(cash/50);
      Q = Math.floor(cash/25);
      if (Q > 0){obj.Q = Q};
      cash = cash - 25 * Math.floor(cash/25);
      D = Math.floor(cash/10);
      if (D > 0){obj.D = D};
      cash = cash - 10 * Math.floor(cash/10);
      N = Math.floor(cash/5);
      if (N > 0){obj.N = N};
      cash = cash - 5 * Math.floor(cash/5);
      P = cash;
      if (P > 0){obj.P = P};
  };
  return obj;
}
