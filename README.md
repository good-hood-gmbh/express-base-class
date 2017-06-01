express-base-class
================

Base controller class that allows you to easily attach route handlers that are automatically bound to the class instance. Each instance creates it's own router, which allows for better route composition/encapsulation.

Example:

1. Create a Controller
```javascript
const BaseController = require('express-base-class');


class DefaultController extends BaseController {
  default(req, res) {
    res.status(404).send('Page doesn\'t exist');
  }
  attachRoutes() {
    this.get('*', this.default);
  }
}

module.exports = new DefaultController();
```
2. Attach a Controller to an Express app

```javascript
const defaultController = require(`./controllers/default`); // Returns a controller instance.
defaultController.use(app); // Attaches router to the app
```
