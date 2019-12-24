import getServices from './ServicesApi';

describe('Tests for service endpoints', () => {
  test('should succeed when passing service name', async () => {
    let singleResponse = await getServices('Assets');
    console.log(singleResponse);
    expect(singleResponse).toHaveLength(1)
  });
});
