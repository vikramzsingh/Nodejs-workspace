const dotenv = require('dotenv');
// console.log(process);
console.log(process.env.PORT);


// ENV using command line
// command :--> PORT=5000 node index.js OR PORT=8626 NODE_ENV=development node index.js
// console.log(process.env.PORT);
// console.log(process.env);

// ENV with .env configurations
dotenv.config();
console.log(process.env.PORT);
console.log(process.env);
