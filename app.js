const heading=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"div"},[React.createElement("h1",{},"I'm h1 tag"),React.createElement("h1",{},"I'm h2 tag")]),React.createElement("div",{id:"div"},[React.createElement("h1",{},"I'm h1 tag"),React.createElement("h1",{},"I'm h2 tag")])]);


const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);