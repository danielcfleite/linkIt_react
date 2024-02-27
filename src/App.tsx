import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Container, GlobalStyle } from "../styles/index";
import { Home } from "./pages/Home";
import { Add } from "./pages/Add";
import {  useSelector } from "react-redux";
import { RootReducer } from "./store";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";
import { GroupsPage } from "./pages/Groups";

// Define your routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/groups",
    element: <GroupsPage />,
  },
]);

function App() {
  // Access Redux state inside the component body using useSelector
  const {isDark} = useSelector((state:RootReducer)=> state.darkMode)


  // Determine the theme based on the isDark value
  const theme = isDark ? darkTheme : lightTheme;


  return (
    <>
    
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </ThemeProvider>
  </>
  );
}

export default App;
