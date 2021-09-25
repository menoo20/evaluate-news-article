import 'babel-polyfill'

const { fetchData } = require("../js/fetchingURL")

test('test the fetch', () => {
  expect(fetchData).toBeDefined();
})