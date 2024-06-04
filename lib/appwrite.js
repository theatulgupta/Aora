import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  projectId: '665dfb1d003d1de2db5d',
  databaseId: '665dfc35003683ba545e',
  userCollectionId: '665dfc5700193ed0ad7a',
  videoCollectionId: '665dfc70000722a709ad',
  storageId: '665dfd82003b66b70675',
};

// Init your React Native SDK
const client = new Client();
client.setEndpoint(config.endpoint).setProject(config.projectId);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email: string, password: string, username: string) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password, username);
    if (!newAccount) {
      throw new Error('Error creating user');
    }

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(config.databaseId, config.userCollectionId, ID.unique(), {
      accountId: newAccount.$id,
      email,
      username,
      avatar: avatarUrl,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error('Error creating user');
  }
};

export async function signIn(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    console.log(error);
    throw new Error('Error signing in');
  }
}
