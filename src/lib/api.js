export async function getLatestPosts() {
  const response = await fetch("http://localhost/wordpress-class/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query LoadAllPosts {
        posts(first: 4) {
          nodes {
            title
            slug
            excerpt
            date
            uri
            featuredImage {
              node {
                mediaItemUrl
                srcSet
                sizes
                altText
                uri
              }
            }
            content(format: RENDERED)
            author {
              node {
                name
              }
            }
            categories {
              nodes {
                name
                uri
              }
            }
          }
        }
      }`,
    }),
  });
  const { data } = await response.json();
  return data;
}

/*
The syntax const { data } = await response.json(); is using destructuring assignment in JavaScript. 
In this case, it is extracting the data property from the object returned by response.json().

When you make a request using fetch and then call response.json(), 
it returns a promise that resolves to a JavaScript object representing the parsed JSON content of the response. 
The object likely has a structure that matches the data returned by your GraphQL query. 
In your case, it would have a property called data.

By using the {} in const { data }, you're saying "extract the data property 
from the object returned by response.json() and assign it to a variable named data."*/

export async function singlePost() {
  const response = await fetch("http://localhost/wordpress-class/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query singleCategory {
        posts {
          edges {
            node {
              title
            slug
            excerpt
            date
            uri
            featuredImage {
              node {
                mediaItemUrl
                srcSet
                sizes
                altText
                uri
              }
            }
              categories {
                nodes {
                  name
                  slug
                }
              }
            }
          }
        }
      }`,
    }),
  });
  const { data } = await response.json();
  return data;
}
