import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { GET_LINKS } from '../../gqlUtil';

const ADD_LINK = gql`
  mutation CreateLink($url: String!, $slug: String) {
    createLink(url: $url, slug: $slug) {
      url
      slug
    }
  }
`;

const Form = () => {
  const [url, setUrl] = useState('');
  const [addLink, { data, loading, error }] = useMutation(ADD_LINK, {
    refetchQueries: [GET_LINKS, 'GetLinks'],
  });

  function submitForm(e) {
    e.preventDefault();
    addLink({ variables: { url: url } });
    setUrl('');
  }

  function updateInput(e) {
    setUrl(e.target.value);
  }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <form onSubmit={submitForm}>
      <input
        type='text'
        name='url'
        value={url}
        onChange={updateInput}
        placeholder='Url'
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
