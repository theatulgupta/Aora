import { Account, Client, ID } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.agkminds.aora',
  projectId: '665dfb1d003d1de2db5d',
  databaseId: '665dfc35003683ba545e',
  userCollectionId: '665dfc5700193ed0ad7a',
  videoCollectionId: '665dfc70000722a709ad',
  storageId: '665dfd82003b66b70675',
};

// Init your React Native SDK
const client = new Client();
client.setEndpoint(config.endpoint).setProject(config.projectId).setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe').then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    },
  );
};
