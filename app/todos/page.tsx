import { fetchTodos } from "../api/lib/fetchTodos";
import Link from "next/link";
import Header from "../components/header/Header";
import { Home } from "lucide-react";
import Footer from "../UI/Footer";


export default async function TodosPage() {
  const todos = await fetchTodos();

  return (
    <>
      <Header />
      <section className="py-[40px] px-0">
        <div className="max-w-[640px] mx-auto px-[15px] w-full h-full">
          <h1 className="text-4xl capitalize mb-[10px] text-white">
           &mdash; todos
          </h1>
          <div className="bg-transparent border border-gray-600 p-[20px] rounded-4xl ">
            {Array.isArray(todos) && todos.length > 0 ? (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className="bg-transparent border border-gray-700 mb-3 p-[25px] rounded-3xl hover:border-cyan-400 cursor-pointer"
                >
                  <h2 className="text-2xl text-white capitalize ">
                    {todo.todo}
                  </h2>
                  <p className="w-full text-gray-400 text-sm font-normal ">
                    {todo.completed}
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-lg text-white font-normal">UserId:</p>
                    <span className="text-sm text-gray-600 py-1.5 px-2 border border-gray-500 rounded-full">
                      {todo.userId}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-center text-cyan-600 capitalize ">
                no todos found.
              </p>
            )}
          </div>

          <div className="footers mt-7">
            <div className="footers__inner flex items-center gap-[40px] w-full">
              <Link
                href={"/"}
                className="text-center hover:bg-black hover:border-gray-400 hover:text-cyan-400 border border-cyan-600 py-[30px] px-[45px] w-full capitalize rounded-3xl"
              >
                  <Home size={25} style={{
                    textAlign:'center'
                  }} />
              </Link>
              <Link
                href={"/comments"}
                className="text-center hover:bg-black hover:border-gray-400 hover:text-cyan-400 border border-cyan-600 py-[30px] px-[45px] w-full capitalize rounded-3xl"
              >
                comments
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </section>


    </>
  );
}
