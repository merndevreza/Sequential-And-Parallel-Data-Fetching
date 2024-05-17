import Comments from "@/app/components/Comments";
import getPost from "@/utils/getPost";
import getPostComments from "@/utils/getPostComments";
import { Suspense } from "react";

const SinglePost = async ({ params: { postId } }) => {
  const post = await getPost(postId);
  const commentsPromise = getPostComments(postId);

  return (
    <div className="border w-1/2 mx-auto mt-8 p-4">
      <h2 className="text-2xl mb-2">{post?.title}</h2>
      <p>{post?.body}</p>


      <Suspense
        fallback={
          <h3 className="text-xl text-center"> Loading Comments...</h3>
        }
      >
        <Comments commentsPromise={commentsPromise} />
      </Suspense>

      
    </div>
  );
};

export default SinglePost;
