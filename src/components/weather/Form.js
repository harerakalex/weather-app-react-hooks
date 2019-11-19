import React, { useState } from 'react'

export default function TodoForm({ search }) {
  const [value, setValue] = useState('kigali');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    search(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="row p-5">
      <input
        type="text"
        name="city"
        className="col-10 border-secondary"
        placeholder="Add todo ..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <input
        type="submit"
        value="Search"
        className="col-2 btn-primary"
      />
    </form>
  );
}
