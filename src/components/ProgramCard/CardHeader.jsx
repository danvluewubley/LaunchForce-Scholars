export const CardHeader = ({ name, link, isFavorited, toggleFavorite }) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center w-[80%]">
        {name}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="website-link ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500 hover:text-blue-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M12.293 3.707a1 1 0 010 1.414L9.414 8H15a1 1 0 110 2H9.414l2.879 2.879a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
            </svg>
          </a>
        )}
      </h2>
      <button
        onClick={toggleFavorite}
        className="favorite-btn text-gray-400 hover:text-[#A780C0] cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${
            isFavorited ? "text-[#A780C0]" : "text-gray-400"
          } transition duration-300`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 4.828a4 4 0 015.656 0L10 6.293l1.172-1.465a4 4 0 015.656 5.656l-6.36 6.36a1 1 0 01-1.415 0l-6.36-6.36a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};
