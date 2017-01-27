module.exports = function stringify(strs) {
  var args = [].slice.call(arguments, 1);

  return args.reduce(function (acc, arg, i) {
    return acc + strs[i] + JSON.stringify(arg);
  }, '') + strs[args.length];
};
