import { Home } from "@/pages";
// Import other page components as needed
// import { Bmi, Calculate, Limitations, Contact } from "@/pages";

export const routes = [
  {
    name: "HOME",
    path: "/home",
    element: <Home />,
  },
  {
    name: "BMI",
    path: "/bmi",
    element: <Home />, // Replace with <Bmi /> when you create the component
  },
  {
    name: "CALCULATE",
    path: "/calculate",
    element: <Home />, // Replace with <Calculate /> when you create the component
  },
  {
    name: "LIMITATIONS",
    path: "/limitations",
    element: <Home />, // Replace with <Limitations /> when you create the component
  },
  {
    name: "CONTACT",
    path: "/contact",
    element: <Home />, // Replace with <Contact /> when you create the component
  }
];

export default routes;
