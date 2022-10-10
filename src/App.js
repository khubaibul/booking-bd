import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Analytics from "./Components/Analytics/Analytics";
import Blog from "./Components/Blog/Blog";
import ErrorPage from "./Components/Errorpage/Errorpage";
import HeroSection from "./Components/HeroSection/HeroSection";
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
          element:
            <div>
              <HeroSection></HeroSection>
              <Quizzes></Quizzes>
            </div>
          ,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: "/home",
          element:
            <div>
              <HeroSection></HeroSection>
              <Quizzes></Quizzes>
            </div>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: "/quiz/:quiId",
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quiId}`),
          element: <QuizCard></QuizCard>
        },
        {
          path: "/analytics",
          element: <Analytics></Analytics>,
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/about",
          element: <About></About>
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
