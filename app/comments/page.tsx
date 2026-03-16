import { Home, Link } from "lucide-react";
import { fetchComments } from "../api/lib/fetchComments";
import Header from "../components/header/Header";
import Links from "../UI/Footer";
import Footer from "../UI/Footer";

export default async function CommentPage() {
  const comments = await fetchComments();

  return (
    <>
      <Header />
      <section className="py-[55px] px-0">
        <div className="max-w-[640px] mx-auto px-[15px] w-full h-full">
          <h1 className="text-4xl capitalize mb-[10px] text-white">&mdash; comments </h1>
          <div className="bg-transparent border border-gray-600 p-[20px] rounded-4xl ">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-transparent border border-gray-700 mb-3 p-[25px] rounded-3xl hover:border-cyan-400 cursor-pointer"
              >
                <h2 className="text-xl text-white capitalize hover:text-cyan-400">
                  Name &mdash;{" "}
                  <span className="text-lg text-cyan-500">
                    {comment.user.username}
                  </span>
                </h2>
                <p className="text-sm text-gray-500">{comment.body}</p>
                <div className="flex items-center gap-5 ">
                  <p className="text-gray-500">Likes</p>
                  <span className="py-1 px-3 border border-gray-500 rounded-full">❤️{comment.likes}</span>
                </div>
              </div>
            ))}
          </div>
            <Footer />
        </div>
      </section>
    </>
  );
}
