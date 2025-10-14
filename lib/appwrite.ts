import { Client, Databases, Account } from 'appwrite';

const client = new Client();

client
  .setEndpoint(
    process.env.NEXT_PUBLIC_ENDPOINT || 'https://cloud.appwrite.io/v1'
  )
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID || '');

export const account = new Account(client);
export const databases = new Databases(client);

export const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID || '';
export const waitlistTableId = process.env.NEXT_PUBLIC_WAITLIST_TABLE_ID || '';

export { client };
