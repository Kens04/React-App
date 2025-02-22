import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PostDetail = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
      );
      const data = await res.json();
      setPosts(data.post);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <div>読み込み中...</div>;
  if (!posts) return <div>記事が見つかりません</div>;

  return (
    <div className="max-w-3xl mx-auto">
      <div>
        <div>
          <img src={posts.thumbnailUrl} alt={posts.title} />
        </div>
        <div className="p-4">
          <div className="flex justify-between">
            <div className="text-slate-400 text-sm">
              {new Date(posts.createdAt).toLocaleDateString()}
            </div>
            <div>
              <div className="flex gap-2">
                {posts.categories.map((category, index) => (
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
          <p className="text-2xl text-left mt-4 text-slate-900">
            {posts.title}
          </p>
          <div className="mt-4 text-left text-slate-700">
            <div dangerouslySetInnerHTML={{ __html: posts.content }} />
          </div>
        </div>
      </div>
    </div>
  );
};
