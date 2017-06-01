const { expect } = require('chai');
const Controller = require('../index');


describe('base/controller', () => {
  let instance;
  beforeEach(() => {
    class Test extends Controller {
      getter() {
        return this;
      }
      attachRoutes() {
        this.get('*', this.getter);
      }
    }

    instance = new Test();
  });

  it('instance created correctly', () => {
    expect(instance.post).to.be.a('function');
    expect(instance.getter()).to.be.equal(instance);
  });
});
