function updateProductByID(id, cols) {
  // Setup static beginning of query
  var query = ['UPDATE products'];
  query.push('SET');

  // Create another array storing each set command
  // and assigning a number value for parameterized query
  var set = [];
  Object.keys(cols).forEach(function (key, i) {
    set.push(key + ' = ($' + (i + 1) + ')');
  });
  query.push(set.join(', '));

  // Add the WHERE statement to look up by id
  query.push('WHERE pr_id = ' + id);

  // Return a complete query string
  return query.join(' ');
}
module.export = updateProductByID;
