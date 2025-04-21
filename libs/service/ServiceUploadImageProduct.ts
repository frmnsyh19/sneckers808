import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/init";
import { v4 as uuidv4 } from "uuid";
export const multipleFiles = async (
  files: File[]
): Promise<{
  success: boolean;
  downloadUrls?: string[];
  message?: string;
}> => {
  // Create an array of promises for each file upload
  const promises = files.map((file) => {
    return new Promise<string>((resolve, reject) => {
      const fileName = `${uuidv4()}-${file.name}`;
      const storageRef = ref(storage, `images/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Monitor upload progress
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done for ${file.name}`);
        },
        (error) => {
          console.error(`Upload error for ${file.name}:`, error);
          reject(error); // Reject the promise on error
        },
        async () => {
          // Upload completed successfully, now get the download URL
          try {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            resolve(downloadUrl); // Resolve with the download URL
          } catch (error) {
            console.error(
              `Error getting download URL for ${file.name}:`,
              error
            );
            reject(error); // Reject the promise if getting the URL fails
          }
        }
      );
    });
  });

  // Wait for all uploads to complete
  try {
    const urls = await Promise.all(promises);
    return { success: true, downloadUrls: urls }; // Return success and download URLs
  } catch (error) {
    console.error("Error uploading files:", error);
    return {
      success: false,
      message: (error as Error).message || "Error uploading files",
    }; // Return error message
  }
};
