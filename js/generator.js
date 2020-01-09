function run(gen) {
  let g = gen();

  function next(data) {
    let result = g.next(data);
    if (result.done) return result.value;
    if (result.value instanceof Promise) {
      result.value.then(data => next(data));
    } else {
      result.value(next);
    }
  }

  return next();
}

// ======== e.g. ==========

function func(data, cb) {
  console.log(data);
  cb();
}

function *gen() {
  let a = yield Promise.resolve(1);
  console.log(a);
  let b = yield Promise.resolve(2);
  console.log(b);
  yield func.bind(null, a + b);
}
run(gen);
/**
output:
1
2
3
**/