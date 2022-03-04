import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_LINKS } from '../gqlUtil';

const LinkList = () => {
  const { loading, error, data } = useQuery(GET_LINKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!</p>;

  return data.links.map(({ url, slug }) => (
    <div key={slug}>
      <p>
        {url} : {slug}
      </p>
    </div>
  ));
};

export default LinkList;
