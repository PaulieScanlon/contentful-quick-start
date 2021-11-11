import React from 'react';
import { graphql } from 'gatsby';

const Page = ({ data }) => {
  return (
    <main>
      <h1>{data.contentfulPage.title}</h1>
      <p>{data.contentfulPage.description.description}</p>
      <img
        src={data.contentfulPage.image.file.url}
        alt={data.title}
        style={{
          width: 300,
          height: 'auto'
        }}
      />
    </main>
  );
};

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      url
      title
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
`;

export default Page;
