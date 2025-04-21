import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/init";
import { v4 as uuidv4 } from "uuid";

import { UploadTaskSnapshot } from "firebase/storage";

export const UploadImage = async (files: File | null) => {
  try {
    const fileName = `${uuidv4()}-${files?.name.replace(/\s+/g, "")}`;
    const storageRef = ref(storage, `images/${fileName}`);

    // Upload image
    const uploadTask = uploadBytesResumable(storageRef, files as File);

    // Await upload completion
    const snapshot: UploadTaskSnapshot = await new Promise(
      (resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
          },
          (error) => {
            console.error("Upload error: ", error);
            reject(error);
          },
          () => resolve(uploadTask.snapshot)
        );
      }
    );

    const downloadUrl = await getDownloadURL(snapshot.ref);

    return {
      success: true,
      urlImage: downloadUrl,
    };
  } catch (error) {
    console.log(error);
  }
};
