module.exports = function rewire(object, mocks) {
  beforeEach(function() {
    for (var name in mocks) {
      object.__Rewire__(name, mocks[name]);
    }

    return mocks;
  });

  afterEach(function() {
    for (var name in mocks) {
      object.__ResetDependency__(name);
    }
  });

  return mocks;
};
