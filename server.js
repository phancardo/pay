require('dotenv').config();
const app = require('./app');
const database = require('./src/config/database');


const PORT = process.env.PORT || 3000;
database();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
