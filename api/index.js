import express from 'express';
import bodyParser from 'body-parser';

// Routes
import mealRoutes from './routes/meal.route';
import menuRoutes from './routes/menu.route';
import orderRoutes from './routes/order.route';

const app = express();

const PORT = 9001;

app.use(bodyParser.json());

// adding app routes/endpoints
app.get('/', (req, res) => {
  res.send('The API is working');
});

app.use('/api/v1/meals', mealRoutes);
app.use('/api/v1/menus', menuRoutes);
app.use('/api/v1/orders', orderRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});


export default app;

