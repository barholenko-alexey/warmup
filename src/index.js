module.exports = function warmup(temperature) {
  //Check input data. If argument == NaN return ERRmsg 
  if (isNaN(temperature)) return "Give me number please!";
  //For insurance, convert argument to INT and apply formula to find result
  return parseInt(temperature) * 9 / 5 + 32;
};