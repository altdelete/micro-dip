import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import oidc from './config/oidc.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

(async () => {
    const oidcProvider = await oidc;
    app.use('/oidc', oidcProvider.callback());
})();

app.get('/', (req, res) => {
    res.send('Welcome to the Keycloak Clone API');
});

connectDB();

export default app;