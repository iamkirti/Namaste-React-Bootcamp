/**
 *
 * @param {object} emp
 * @param {string} searchText
 * @returns
 */

const checkEmployee = (emp, searchText) =>
  emp?.name?.toLocaleLowerCase().includes(searchText?.toLocaleLowerCase());

/**
 * Utility function to filter the searched employeesout of the array of state
 * @param {string} searchText
 * @param {Array} data
 * @returns {Array}
 */

export const searchEmployees = (searchText, data) => {
  return data.filter((emp) => checkEmployee(emp, searchText));
};
