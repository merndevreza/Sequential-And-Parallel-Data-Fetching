import getPost from "@/utils/getPost";
import getPostComments from "@/utils/getPostComments";

const SinglePost = async ({ params: { postId } }) => {
  const postPromise = getPost(postId);
  const commentsPromise = getPostComments(postId);
  const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  return (
    <div className="border w-1/2 mx-auto mt-8 p-4">
      <h2 className="text-2xl mb-2">{post?.title}</h2>
      <p>{post?.body}</p>

      <h3 className="text-xl border-b my-5">Comments</h3>
      <ul>
        {comments.map((item) => (
          <li key={item.id}>
            {item.id}. {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SinglePost;
