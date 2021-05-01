export const colorOptions = [
  ["gray-300", "gray-400", "gray-500", "gray-600", "gray-700", "gray-800", "gray-900"],
  ["red-300", "red-400", "red-500", "red-600", "red-700", "red-800", "red-900"],
  ["orange-300", "orange-400", "orange-500", "orange-600", "orange-700", "orange-800", "orange-900"],
  ["yellow-300", "yellow-400", "yellow-500", "yellow-600", "yellow-700", "yellow-800", "yellow-900"],
  ["green-300", "green-400", "green-500", "green-600", "green-700", "green-800", "green-900"],
  ["teal-300", "teal-400", "teal-500", "teal-600", "teal-700", "teal-800", "teal-900"],
  ["blue-300", "blue-400", "blue-500", "blue-600", "blue-700", "blue-800", "blue-900"],
  ["indigo-300", "indigo-400", "indigo-500", "indigo-600", "indigo-700", "indigo-800", "indigo-900"],
  ["purple-300", "purple-400", "purple-500", "purple-600", "purple-700", "purple-800", "purple-900"],
  ["pink-300", "pink-400", "pink-500", "pink-600", "pink-700", "pink-800","pink-900"],
].reverse();

export function rotateMatrix(matrix) {
  const result = matrix.slice();
  return result[0].map((arr, idx) => result.map(row => row[idx]).reverse());
}