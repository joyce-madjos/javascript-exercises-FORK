const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says CAT MEOW"Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
