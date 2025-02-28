import React from "react";

const ImageDetailsModal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-6 rounded-lg relative overflow-hidden">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          <i className="fa fa-times text-2xl"></i>
        </button>
        <div className="overflow-auto max-h-[80vh]">
          <img
            src={image.largeImageURL}
            alt={image.tags}
            className="w-full max-h-[60vh] object-contain rounded-lg"
          />
          <h2 className="mt-4 text-xl font-semibold">
            Image by: {image.user}
          </h2>
          <p className="mt-2">Tags: {image.tags}</p>
          <p>
            Resolution: {image.imageHeight} X {image.imageWidth}
          </p>
          <a
            href={image.pageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-500 underline"
          >
            View on Pixabay
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailsModal;
