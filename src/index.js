module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];
  return matrix.reduce((acc, row, index) => {
    return index % 2 === 0 ? acc.concat(row) : acc.concat(row.reverse());
  }, []);
};
