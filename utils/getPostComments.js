import wait from "./wait";

export default async function getPostComments(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  if (!res.ok) {
    throw new Error("Error occurred during fetching data");
  }
  await wait(3000);
  return res.json();
}
