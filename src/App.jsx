import "./App.css";
import { posts } from "./data/posts";

const App = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <ul className="flex flex-col gap-5">
        {posts.map((post) => (
          <li key={post.id} className="border border-gray-300 p-4">
            <a href="#">
              <div>
                <div>
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
                  <p className="text-2xl text-left mt-4 text-slate-900">
                    {post.title}
                  </p>
                  <div className="mt-4 text-left text-slate-700">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
