import '@testing-library/jest-dom/extend-expect';
import fetchingResults from '../__mocks__/apiFetch';

describe('test fetching results', () => {
  it('test fetching completed ', async () => {
    await fetchingResults().then((results) => expect(results.data[0].completed).toBe(false));
  });
  it('test fetching userId', async () => {
    await fetchingResults().then((results) => expect(results.data[0].userId).toBe(1));
  });

  it('test fetching title', async () => {
    await fetchingResults().then((results) => expect(results.data[0].title).toEqual('delectus aut autem'));
  });
});