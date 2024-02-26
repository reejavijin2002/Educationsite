import axios from "axios";

const ImageDelete = async (imageNames) => {
    try {
        const response = await axios.delete(
            "https://sacrosys.net:6662/api/9132/DeleteImages",
            {
                headers: {
                    "Token": "w^0V6jJamvLyaBy5VEYQ2x4gzwrx5BifP6wjB/hQDNmDFSJ2//4/4oze7iJuiFrd",
                   
                },
                data: { fileNames: imageNames } 
            }
        );

        console.log("Image deleted successfully!", response.data);
        return response.data;
    } catch (error) {
        console.error("Error deleting image", error);
        throw error;
    }
};

export default ImageDelete;

