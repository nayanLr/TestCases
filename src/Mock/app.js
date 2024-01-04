import {fetchUserData} from './apis';

export async function getUserDetails(userId) {
  const userData = await fetchUserData(userId);

  const userDetails = {
    userId: userData.userId,
    id: userData.userId,
    title: userData.title,
  };

  return userDetails;
}
