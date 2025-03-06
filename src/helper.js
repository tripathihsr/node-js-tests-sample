function formatDate(date) {
  return date.toISOString().substr(0, 10);
}

function generateRandomId(max) {
  return Math.floor(Math.random() * max) + 1;
}

module.exports = {
  formatDate,
  generateRandomId
};
