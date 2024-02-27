import axios from "axios";
import BanerUpload from "./BanerUpload";

const ImageDelete = async (Filename,uploadStatus, message, filename) => {


    try {
        const response = await axios.delete(
            "https://sacrosys.net:6662/api/9132/DeleteImages",
            {
                headers: {
                    "Token": "w^0V6jJamvLyaBy5VEYQ2x4gzwrx5BifP6wjB/hQDNmDFSJ2//4/4oze7iJuiFrd",
                    "Content-Type": "application/json"
                },
                data: {
                    fileNames: [Filename]
                }
            }
        );
  
   
        return response.data;
    } catch (error) {
        console.error("Error deleting image", error);
        throw error;
    }
};

export default ImageDelete;
