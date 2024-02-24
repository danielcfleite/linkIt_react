import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Container, GlobalStyle } from "../styles/index";
import { Home } from "./pages/Home";
import { Add } from "./pages/Add";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </>
  );
}

export default App;
