const { migrate } = require('../migrate/helpers/migrate');

// Tables that should not be proccessed later
const processedTables = ['404s'];

// Custom migration function, handles DB reads and writes
async function migrateTables() {
  await migrate('404s', 'not_founds');
}

module.exports = {
  processedTables,
  migrateTables,
};
