if (process.env.NODE_ENV === 'production'){
    //we are in production mode
    module.export = require('./prod');
} else {
    //we are in development mode
   module.export = require('./dev');
}