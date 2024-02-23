import axios from "axios";

const BanerUpload = async (image) => {
  console.log(image,"hii mwone");
  try {
    const formData = new FormData();
    formData.append("imageFiles", image);

    const response = await axios.post(
      "https://sacrosys.net:6662/api/9132/UploadImages",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Token": "w^0V6jJamvLyaBy5VEYQ2x4gzwrx5BifP6wjB/hQDNmDFSJ2//4/4oze7iJuiFrd"
        },
      }
    );
   

    console.log("Image uploaded successfully", response.data);
    return response.data;
  } catch (error) {
    console.error("Error uploading image", error);
    throw error;
  }
};

export default BanerUpload;


 