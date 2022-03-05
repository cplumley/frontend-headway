import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { GET_LINKS } from '../../gqlUtil';
import { Button, Input } from '@mui/material';

const ADD_LINK = gql`
  mutation CreateLink($url: String!, $slug: String) {
    createLink(url: $url, slug: $slug) {
      url
      slug
    }
  }
`;

const Form = () => {
  const [state, setState] = useState({
    url: '',
    slug: '',
  });
  const [addLink, { data, loading, error }] = useMutation(ADD_LINK, {
    refetchQueries: [GET_LINKS, 'GetLinks'],
  });

  function submitForm(e) {
    e.preventDefault();
    addLink({ variables: { url: state.url, slug: state.slug } });
    setState({
      url: '',
      slug: '',
    });
  }

  function updateInput(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <form onSubmit={submitForm}>
      <Input
        type='text'
        name='url'
        value={state.url}
        onChange={updateInput}
        placeholder='Paste link here'
        sx={{ my: 4, mx: 2 }}
      />
      <Input
        type='text'
        name='slug'
        value={state.slug}
        onChange={updateInput}
        placeholder='Unique slug?'
      />
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default Form;
