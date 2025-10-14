import { parseStringify } from './../utils';
import { databaseId, waitlistTableId } from './../appwrite';
import { databases } from '../appwrite';
import { AppwriteException, ID } from 'appwrite';

export async function addToWaitlist(email: string) {
  try {
    const addedToWaitlist = await databases.createDocument({
      databaseId: databaseId,
      collectionId: waitlistTableId,
      documentId: ID.unique(),
      data: {
        email: email,
        consent: true,
        source: 'landing',
      },
    });

    return { success: true, data: parseStringify(addedToWaitlist) };
  } catch (error) {
    if (error instanceof AppwriteException) {
      if (error.code === 409) {
        return {
          success: false,
          error: 'This email has already been registered.',
        };
      }
      return {
        success: false,
        error: 'Looks like something went wrong. Please try again.',
      };
    }
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
