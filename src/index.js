module.exports = function makeExchange(currency) {
    let result = {};
    
    if (currency > 10000){
       return result = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    };

    let half = Math.floor(currency / 50);
    let quarters =  Math.floor((currency - (half * 50)) / 25);
    let dimes = Math.floor((currency - (half * 50 + quarters * 25)) / 10);
    let nickels = Math.floor((currency - (half * 50 + quarters * 25 + dimes * 10)) / 5);
    let pennies = currency - (half * 50 + quarters * 25 + dimes * 10 + nickels * 5);

    result['H'] = half;
    result['Q'] = quarters;
    result['D'] = dimes;
    result['N'] = nickels;
    result['P'] = pennies;

    Object.keys(result).forEach((key) => (result[key] <= 0) && delete result[key]);
    return result;
}
