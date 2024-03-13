import React, { useState, useEffect } from "react";
import img1 from "../../assets/image/cloud-storage_1517985.png";
import { useRef } from "react";
import img2 from "../../assets/image/jpgindumark.jpg";
import BanerUpload from "../../service/ap1/BanerUpload";
import ImageDelete from "../../service/ap1/ImageDelete";

const Baneradding = (Filename) => {
  const InputRef = useRef(null);
  const [image, setImage] = useState([]);
  const [file, setFile] = useState(false);
  const [true1, setTrue1] = useState(false);
  const [uploadStatusList, setUploadStatusList] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [filenameList, setFilenameList] = useState([]);
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = async () => {
      try {
        for (let i = 0; i < filenameList.length; i++) {
          await ImageDelete(filenameList[i]);
        }
        console.log("Images deleted successfully before unload.");
        setFilenameList([])
        setImage([]); 
      } catch (error) {
        console.error("Error deleting images before unload:", error);
      }
    };
  
    const handleVisibilityChange = async () => {
      if (document.visibilityState === "hidden") {
        if(filenameList.length>0){
          await handleBeforeUnload()
        }
      
      }
    };
  
    console.log(image.length, "list");
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);
  
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [filenameList]);
  
  

  const handleImageClick = () => {
    InputRef.current.click();
  };

  const handleViewImage = async (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...image, ...files];

    setImage(newImages);
    await handleUploadImages(files);
  };

  const fileHandler = () => {
    true1 === true && setFile(true);
  };
  const handleDeleteImage = async (index) => {
    try {
      setTrue1(true);

      const newImages = [...image];
      const deletedImage = newImages[index];
      newImages.splice(index, 1);

      setImage(newImages);

      const updatedUploadStatuses = [...uploadStatusList];
      const updatedMessages = [...messageList];
      const updatedFilenames = [...filenameList];

      updatedUploadStatuses.splice(index, 1);
      updatedMessages.splice(index, 1);
      updatedFilenames.splice(index, 1);

      setUploadStatusList(updatedUploadStatuses);
      setMessageList(updatedMessages);
      setFilenameList(updatedFilenames);

      const filename = filenameList[index];

      await ImageDelete(filename);

      console.log("Image deleted successfully!");
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    const newImages = [...image];

    for (let i = 0; i < files.length; i++) {
      newImages.push(files[i]);
    }
    console.log(newImages);

    setImage(newImages);
    handleUploadImages();
  };
  const handleUploadImages = async (files) => {
    try {
      const newImages = [...image, ...files];
      const uploadPromises = [];
      setSubmitButtonClicked(false);
      for (let i = image.length; i < newImages.length; i++) {
        const img = newImages[i];
        const uploadPromise = BanerUpload(img, fileHandler);
        uploadPromises.push({ promise: uploadPromise, index: i });
      }

      const uploadResults = await Promise.all(
        uploadPromises.map((item) => item.promise)
      );

      const updatedUploadStatuses = [...uploadStatusList];
      const updatedMessages = [...messageList];
      const updatedFilenames = [...filenameList];

      uploadResults.forEach((result, i) => {
        updatedUploadStatuses[uploadPromises[i].index] =
          result.ImageUploadStatus;
        updatedMessages[uploadPromises[i].index] = result.Message;
        updatedFilenames[uploadPromises[i].index] = result.Filename;
      });

      setUploadStatusList(updatedUploadStatuses);
      setMessageList(updatedMessages);
      setFilenameList(updatedFilenames);
      setImage(newImages);
      console.log(updatedFilenames);
      console.log("All images uploaded successfully!");
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  const dragPerson = useRef(0);
  const draggedOverperson = useRef(0);
  const handleSort = () => {
    const newImages = [...image];
    const temp = newImages[dragPerson.current];
    newImages[dragPerson.current] = newImages[draggedOverperson.current];
    newImages[draggedOverperson.current] = temp;
    setImage(newImages);
  };

  const handleDragStart = (index) => {
    dragPerson.current = index;
  };

  const handleDragEnter = (index) => {
    draggedOverperson.current = index;
  };
  const submitHandler = () => {
    setSubmitButtonClicked(true);
    console.log(filenameList);
  };

  return (
    <div className="bg-stone-50 sticky pb-5   top-0 p-2 mt-2   shadow border-slate-200z-30 w-full h-auto">
      <h3 className="px-5 pt-5 pb-3 font-bold font-serif">Banner Image</h3>
      <div onDragOver={handleDragOver} onDrop={handleDrop}>
        <div
          className="ml-auto mr-auto border-3  border-dotted border-black mx-5 cursor-pointer"
          onClick={handleImageClick}
        >
          <img src={img1} alt="" className="ml-auto mr-auto" />
          <p className="text-center text-lg font-semibold">
            Drag & Drop some images here, Or Click here
          </p>
        </div>
      </div>
      <input
        type="file"
        ref={InputRef}
        onChange={handleViewImage}
        style={{ display: "none" }}
        multiple
      />
      <div className="flex flex-wrap justify-center">
        {image.map((image, index) => (
          <>
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt=""
              className="w-1/4 h-36 ml-12 mt-4 flex rounded-lg border-2 border-gray-400"
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragEnter={() => handleDragEnter(index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            />
            <img
              src={img2}
              alt=""
              className="h-5 ml-[-15px] mt-4 relative rounded-full cursor-pointer"
              onClick={() => handleDeleteImage(index)}
            />
          </>
        ))}
      </div>
      <button
        className="p-2 bg-green-400 text-white ml-12 px-4 font-semibold mt-4 rounded-sm"
        onClick={submitHandler}
      >
        {" "}
        Submit
      </button>
    </div>
  );
};

export default Baneradding;
