# jasmine-rewire

jasmine-rewire is a tiny helper for making the [Babel Rewire
Plugin][https://github.com/speedskater/babel-plugin-rewire] a little easier to
use under Jasmine. A common pattern that we use at Radify
looks something like this:

```javascript
var mocks;

beforeEach(() => {
  mocks = {
    modA: jasmine.createSpyObj('mockModA', ['foo', 'bar']),
    modB: jasmine.createSpyObj('mockModB', ['baz', 'qux'])
  };

  sut.__Rewire__('modA', modA);
  sut.__Rewire__('modB', modB);
});

afterEach(() => {
  sut.__ResetDependency('modA');
  sut.__ResetDependency('modB');
});

it('tests system under test using mocked dependencies', () => {
  // ...
});
```

Maintaining this structure can be tedious - particularly with complex specs and
systems under test. Here's the equivalent when using jasmine-rewire:

```javascript
import rewire from 'jasmine-rewire';

var mocks = rewire(sut, {
  modA: jasmine.createSpyObj('mockModA', ['foo', 'bar']),
  modB: jasmine.createSpyObj('mockModB', ['baz', 'qux'])
});

it('tests system under test using mocked dependencies', () => {
  // ..
});
```

The rewire function automatically takes care of calling `__Rewire__` on the
system under test before each spec, and `__ResetDependency__` after each spec.
This allows you, the developer, to focus on constructing mocks and not worry
about attaching and detaching them.

### License

jasmine-rewire is released under the [BSD 3-clause “New” License](LICENSE).
