import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const Form = () => {
  const [link, setLink] = useState('');

  function submitForm(e) {
    e.preventDefault();
    console.log(link);
  }

  function updateInput(e) {
    setLink(e.target.value);
  }

  return (
    <form onSubmit={submitForm}>
      <input
        type='text'
        name='link'
        value={link}
        onChange={updateInput}
        placeholder='Link'
      />
      <input type='submit' />
    </form>
  );
};

export default Form;
