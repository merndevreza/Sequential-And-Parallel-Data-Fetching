
const Comments = async({commentsPromise}) => {
   const comments=await commentsPromise;
   return (
      <div>
         
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

export default Comments;