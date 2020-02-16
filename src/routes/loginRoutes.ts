import { Router, Request, Response } from 'express';
import faker from 'faker';

const router = Router();

const fName = faker.name.findName();
const fAddressZipCode = faker.address.zipCode();

router.get('/login', (req: Request, res: Response) => {
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

router.post('/login', (req: Request, res: Response) => {
  // if (req) res.send('success!');

  const { email, password } = req.body;
  if (email == 'tom@test.me' && password == 1234) {
    res.send(`
    <h1>email: ${email}, pass: ${password}</h1>
    <hr>
    <p>${fName}</p>
    <hr>
    <p>zipCode: ${fAddressZipCode}</p>
    `);
  } else {
    res.status(404).send('Sorry, cant find that');
  }
});

export { router };
