import {getUserDetails} from '../../../src/Mock/app';
import * as api from '../../../src/Mock/apis.js';

jest.mock('../../../src/Mock/apis.js');

describe('Get User details :', () => {
  test('Returns user details correctly', async () => {
    api.fetchUserData.mockResolvedValue({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
    });

    const result = await getUserDetails(1);

    expect(result).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
    });
  });
});
