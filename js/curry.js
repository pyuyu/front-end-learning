function curry(func, args) {
  args = args || [];
  return function () {
    var _args = args.slice(0);
    [].push.apply(_args, arguments)

    if (_args.length < func.length) {
      return curry(func, _args);
    }

    return func.apply(this, _args);
  }
}


var fn = curry(function (a, b, c) {
  console.log([a, b, c]);
});

fn("a1", "b1", "c1")
fn("a2", "b2")("c2")
fn("a")("b")("c")
fn("a")("b", "c")