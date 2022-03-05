import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_LINKS } from '../gqlUtil';

const LinkList = () => {
  const { loading, error, data } = useQuery(GET_LINKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!</p>;

  let urlPre = 'http://localhost:3000/';

  return data.links
    .slice(0)
    .reverse()
    .map(({ url, slug }) => (
      <div key={slug}>
        <p onClick={() => navigator.clipboard.writeText(urlPre + slug)}>
          {url} : {slug}
        </p>
      </div>
    ));
};

export default LinkList;
