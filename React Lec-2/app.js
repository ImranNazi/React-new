//creating parent and child div using react
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "hii"),
    React.createElement("h1", {}, "hello"),
  ]),
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "Bye"),
    React.createElement("h1", {}, "See you"),
  ]),
]);
//create root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// /* creating element object */
// const parent = React.createElement("h1", {}, "lol");
// // creating root
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //render is used to convert object in to html and display in browser..
