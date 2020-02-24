import express, { Request, Response } from 'express';
import { routerForTest } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session'

const app = express();
const port = 8321;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: [ '隨便打字即可aasdfasdfasdfasdf']}))
app.use(routerForTest);

app.listen(port, () => {
  console.log(`server start at http://localhost:${port}`);
});
