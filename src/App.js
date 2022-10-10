import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/Errorpage/Errorpage";
import QuizCard from "./Components/QuizCard/QuizCard";
import Quizzes from "./Components/Quizzes/Quizzes";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Quizzes></Quizzes>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: "/home",
          element: <Quizzes></Quizzes>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: "/quiz/:quiId",
          loader: async ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quiId}`),
          element: <QuizCard></QuizCard>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
