import React from "react";

const FileInput = ({ input, setInput, name }) => {
  return (
    <div className="rounded bg-white py-1 mb-2 grid grid-cols-10">
      <label
        htmlFor="profilePic"
        className="text-white bg-red-500 bottom-2 right-2 p-2 rounded cursor-pointer mr-2 col-span-2"
      >
        Add {name}
      </label>
      <input
        type="file"
        id="profilePic"
        size="20"
        className="hidden"
        onChange={(e) => setInput(e.target.files[0])}
        required
      />
      <p className="col-span-8">
        {input ? input.name : `Select an ${name}`}
      </p>
    </div>
  );
};

export default React.memo(FileInput);
