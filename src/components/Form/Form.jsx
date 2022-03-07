import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { GET_LINKS } from '../../gqlUtil';
import { Alert, Button, OutlinedInput } from '@mui/material';

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

  return (
    <form onSubmit={submitForm}>
      {
        error ?
          <Alert severity="error">Submission error! {error.message}</Alert>
          : null
      }
      <OutlinedInput
        type='text'
        name='url'
        value={state.url}
        onChange={updateInput}
        placeholder='Paste link here'
        sx={{ my: {  xs: 1, md: 4 }, width: {  xs: .8, md: 2 / 4 }}}
      />
      <OutlinedInput
        type='text'
        name='slug'
        value={state.slug}
        onChange={updateInput}
        placeholder='Unique slug?'
        sx={{ my: { xs: 1, md: 4 }, mx: 2, width: { xs: .8, md: 1/4 }}}
      />
      <Button type='submit' variant='outlined' sx={{ my: { xs: 1, md: 4 }, p: 2, width: { xs: .8, md: 1/8 } }}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
