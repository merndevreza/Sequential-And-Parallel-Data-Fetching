import getPosts from "@/utils/getPosts";
import Link from "next/link";

const Sequential = async () => {
  const posts = await getPosts();
  return (
    <div className="w-1/2 mx-auto mt-8">
    <h2 className="text-3xl text-center border-b-2 mb-10">Sequential</h2>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <Link href={`/sequential/post/${item.id}`}>
            {item.id}. {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sequential;
