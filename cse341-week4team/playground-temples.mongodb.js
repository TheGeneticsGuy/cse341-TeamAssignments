// MongDB Playground
// Name of your mongoDB - mine is contactsDB
const database = 'contactsDB';
const collection = 'temples';

// The current DB to use
use(database);

// Create a new collection
db.createCollection(collection);