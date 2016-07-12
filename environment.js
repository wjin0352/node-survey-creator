//  enable us to specify an environment when starting the application
module.exports = global.environment || process.env.NODE_ENV || 'development';




// exports.DATABASE_URL = process.env.DATABASE_URL ||
//                        global.DATABASE_URL ||
//                        process.env.NODE_ENV === 'production' ?
//                             'mongodb://localhost/shopping-list' :
//                             'mongodb://localhost/shopping-list-dev';
// exports.PORT = process.env.PORT || 8080;
