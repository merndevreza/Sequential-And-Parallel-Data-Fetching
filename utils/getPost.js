import wait from "./wait";

export default async function getPost(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (!res.ok) {
    throw new Error("Error occurred during fetching data");
  }
  await wait(2000);
  return res.json();
}
