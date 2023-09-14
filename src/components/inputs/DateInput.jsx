import React from "react";

const DateInput = ({ input, setInput, name }) => {
  return (
    <div className="shadow rounded bg-white py-1 mb-2">
      <label className="font-bold px-3 text-gray-600 text-sm">{name}</label>
      <input
        type="date"
        className="px-3 text-gray-500 w-full focus:outline-none"
        value={input}
        name={name}
        onChange={(e) => setInput(e.target.value)}
        required
      />
    </div>
  );
};

export default React.memo(DateInput);
