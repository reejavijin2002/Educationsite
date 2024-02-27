import axios from "axios";
import ImageDelete from "./ImageDelete";


const BanerUpload = async (image, fileHandler, Filename) => {
  console.log(fileHandler, "vannu");
  try {
    const formData = new FormData();
    formData.append("imageFiles", image);

    const response = await axios.post(
      "https://sacrosys.net:6662/api/9132/UploadImages",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Token:
            "w^0V6jJamvLyaBy5VEYQ2x4gzwrx5BifP6wjB/hQDNmDFSJ2//4/4oze7iJuiFrd",
        },
      }
    );

    const { ImageUploadStatus, Message, FileDetails } = response.data;
    const fileDetail = FileDetails[0];
    const { Filename } = fileDetail;

   
   

  
  
 
    return {
      ImageUploadStatus,
      Message,
      Filename,
    };
  } catch (error) {
    console.error("Error uploading image", error);
    throw error;
  }
};

export default BanerUpload;
