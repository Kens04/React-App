import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));
  if (!post) return <div>記事が見つかりません</div>;

  return (
    <div className="max-w-3xl mx-auto">
      <div>
        <div>
          <img src={post.thumbnailUrl} alt={post.title} />
        </div>
        <div className="p-4">
          <div className="flex justify-between">
            <div className="text-slate-400 text-sm">
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
            <div>
              <div className="flex gap-2">
                {post.categories.map((category, index) => (
                  <div
                    key={index}
                    className="border border-blue-500 p-1 text-sm rounded text-blue-500"
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-2xl text-left mt-4 text-slate-900">{post.title}</p>
          <div className="mt-4 text-left text-slate-700">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>
    </div>
  );
};
