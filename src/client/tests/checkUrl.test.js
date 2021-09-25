const { isValidUrl } = require('../js/checkURL');

test('Test the url', () => {
  expect(isValidUrl('string')).toBeFalsy();
  expect(isValidUrl(43)).toBeFalsy();
  expect(isValidUrl('$2314nj jn545 %%$$$ ')).toBeFalsy();
  expect(isValidUrl('https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries')).toBeTruthy();
})