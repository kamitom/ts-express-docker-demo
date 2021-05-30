import { Router, Request, Response } from 'express';
import faker from 'faker';

const routerForTest = Router();

const fName = faker.name.findName();
const fAddressZipCode = faker.address.zipCode();

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined | number };
}

routerForTest.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email">
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password">
      </div>
      <button>Submit</button>
    </form>
  `);
});

routerForTest.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email == 'tom@test.me' && password == 1234) {
    req.session = { loggedIn2: true };
    res.redirect('/');
  } else {
    res.status(400).send('Invalid email or password');
  }
});

routerForTest.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn2) {
    res.send(`
      <hr>
      <div>
        <div>${fName} are logged in</div>
        <a href='/logout'>logout</a>
      </div>
      <hr>
    `);
  } else {
    res.send(`
      <hr>
      <div>
        <div>${fName} are not logged in</div>
        <a href='/login'>login</a>
      </div>
      <hr>
    `);
  }
});

routerForTest.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

export { routerForTest };
