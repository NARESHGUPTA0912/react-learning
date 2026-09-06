<!-- 23/2/26 -->

# Project Setup
--------------------

Get-ExecutionPolicy
RemoteSigned or Unrestricted  // its ok

if restricted:
Set-ExecutionPolicy RemoteSigned

afterthat ExecutionPolicy change shows then write Y then again check:
Get-ExecutionPolicy

check node version:
node -v  		// it shows node version if installed

create React app:
vite command:

npx create-vite@latest react-app

|
o  Select a framework:
|  React
|
o  Select a variant:
|  JavaScript
|
o  Use Vite 8 beta (Experimental)?:
|  No
|
o  Install with npm and start now?
|  Yes
|
o  Scaffolding project in C:\Users\Public\Qspider Classes\React\react-app...
|
o  Installing dependencies with npm...

added 157 packages, and audited 158 packages in 3m

33 packages are looking for funding
  run `npm fund` for details

4 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
|
o  Starting dev server...

> react-app@0.0.0 dev
> vite


  VITE v7.3.1  ready in 809 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

after this copy the link and run on browser it shows Vite + react logo



<!-- my notes for my personal understanding. -->
# What is React ?

-> React is a JavaScript library used to build User Interfaces (UI), especially for web applications.
-> It was developed by: 👉 Facebook (now Meta)
-> React helps us build fast, interactive, and modern websites.
-> Instead of writing large HTML + JavaScript files, React lets you build UI using small reusable components.

# Why do we use React ?

1. Component-Based Architecture
2. Reusablity
3. Single Page Application (SPA)
4. Fast Performance (virtual Dom)
5. Huge Job Demand

Q) When Should You Use React ?
_Use React when:_

- Building interactive UI
- Creating SPA
- Connecting frontend with REST APIs
- Building modern web apps

# React vs Normal JavaScript:

     _____________________________________________________________
    | Feature        | Normal JS           | React                |
    | -------------- | ------------------- | -------------------- |
    | Code Structure | Messy in large apps | Organized            |
    | Reusability    | Hard                | Easy                 |
    | Performance    | Slower updates      | Faster (Virtual DOM) |
    | Maintenance    | Difficult           | Easier               |
    ```````````````````````````````````````````````````````````````

# Features of React ?

    1) Single Page Application
    2) Declarative
    3) Component Based Architecture
    4) Reusability

# Class Based Components vs Function Based Components

- In React, there are two ways to create components:
  1️⃣ Class-Based Components
  2️⃣ Function-Based Components

_Class-Based Components:_

- A component written using ES6 class that extends React.Component.
- Features:
  1. Uses this 2) Has constructor 3) Uses this.state 4) Uses lifecycle methods: 5) componentDidMount() 6) componentDidUpdate() 7) componentWillUnmount()
- Problems:
  1. More code 2) Harder to understand 3) this keyword confusion

_Function Based Components: [Modern Way]_

- A component written as a JavaScript function.
- After React 16.8, Hooks were introduced, making function components powerful.
- Features:
  1. No this 2) Less code 3) Uses Hooks: 4) useState()
  2. useEffect() 6) useContext() 7) Easier to read & maintain

Command for running react project: npm run dev
Note: dev is written on package.json file in script .

- Revise Functions from JS

<!-- 24/2/26 -->

# HTML: HTML stands for HyperText Markup Language.

- It is used to design web pages. It has predefined tags.
  <!DOCTYPE html>
    <html>
        <head><title>My Page</title></head>
        <body><h1>Hello Naresh</h1></body>
    </html>
- Features: 1) Fixed tags (h1, p, div, etc.) 2) Used for displaying content 3) Not strict like XML 4) Used in all websites

# XML: XML stands for eXtensible Markup Language.

- It is used to store and transport data.
- You can create your own custom tags.
- Example:
  <student>
  <name>Naresh</name>
  <age>22</age>
  <course>MCA</course>
  </student>
- Features:

1.  User-defined tags 2) Strict syntax 3) Used for data exchange 4) Platform independent

# Example JSX: Now important for you (React learner) 👇

- React uses JSX.
- JSX = JavaScript XML
- It allows us to write HTML inside JavaScript.
-     function App() {
         return <h1>Hello Naresh!</h1>;
      }

# Fragment (Empty Tag):

# Difference Between XML and HTML?

_In JS_ - App()
_In JSX_ - <App></App>
Paired Tag: <App></App>
Unpaired Tag: </App>

Executionj Flow : Html -> Main -> App -> HeaderComp -> App -> Main -> Html

Connectin, States, Props

<!-- 25/2/26 -->

if we import a component and we dont use it so if that component have occured some error then our code will not run.

hook means inbuilt function in react.

if we didinot import use/state and use it then it give error not defined

# Rerender: when the state change then our page is update without reloading a page by rendering.

<!-- 26/2/26 -->

# Conditional Rendering

<!-- 27/2/26 -->

states = local
props(properties) = data shared, immutable

<!-- 6/3/26 -->

Context

<!-- 9/3/26 -->

# Forms : Controlled, Uncontrolled

Cotrolled: if used form through virtual dom(always preferred) --- useState
UnCotrolled: if used form directly through real dom --- useRef

Diffing-Algo : used to checks diff between previous virtual dom and new virtual dom.

# Reconciliation : it is the process to update the real dom by comaparing the changes between previous and new virtual dom

Note: when give only value and did not use onChange
ControlledForm1.jsx:14
You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.

 <!-- 10/3/26 -->

Revision : States, Props, props drilling, state uplifting, controlled Froms 2, Context.

 <!-- 12/3/26 -->

// codestepbystep = node js

 <!-- 13/3/26 -->

TailwingCss Installation using vite:
Step 1: npm install tailwindcss @tailwindcss/vite
Step 2: check dependency in package.json
Step 3: write this in vite.config.js file and called tailwindcss method in plugins arr:
import tailwindcss from '@tailwindcss/vite'

<!-- 16/3/26 -->

LifeCycle of a Component (using CBC) phases

1. Mounting
2. Updating
3. Unmounting

methods: componentDidMount() componentDidUpdate() componentWillUnmount() are the three phases where the methods executes.

- Abort Controller

## LifeCycle of a Component (using FBC):

render():
useEffect(callback, [])

- Dependency array
  useEffect(()=>{
  // render
  })

---

useEffect(()=>{
// mounting phase

return() => { // clean-up function
// unmounting
}
}, [])

---

useEffect(()=>{
// updating Phase
}, [count])

---

Difference between states and props ?
Redux -> State management library
// interview guide

<!-- 22-3-26 -->

// rafce -> for creating component shortcut
// parents to child data -> through props, props drilling
// child to parents data -> through callbacks

Uncontrolled forms are those where form data is handled by the DOM itself rather than React. In uncontrolled forms, you can use refs to access form values directly from the DOM.

<p>In the example below, we have an uncontrolled form with two input fields: email and password. We use the useRef hook to create references to these input fields. When the form is submitted, we can access the current values of these fields using the refs.</p>

<p>Uncontrolled forms are simpler to implement but may not provide the same level of control and validation as controlled forms. They are useful when you want to quickly gather input without needing to manage state for each form field.</p>

<!-- 23 mar -->
                      :   npm install react hot-toast
For downloading Redux:    npm i @reduxjs/toolkit react-redux      // toolkit provide inbuilt methods and react-redux provide component that bind react and redux
For downloading React Router DOM:   npm i react-router-dom


<!-- 24 mar -->
useReducer()

Redux: 
1) Store: CounterStore
2) Slice: initialState
          name
          reducers
3) reducers
4) action:    incre()   decre()   reset()
-> useSelector(),   useDispatch()

-> main -> App -> 

# State Uplifting : siblings share same state



<!-- April 2 -->
-> react-hot-toast
provide toast("") used for pop up message



// json-server --watch db.json --port 5000 


----------------------------------
<!-- 7 April -->
Dom -- DOM stands for document object model that represents the html or xml document as a tree like structure, where each node represents an element, attribute, comment, text in the document.
-> When a webpage is loaded, browser creates a dom tree that represents the document structure and content.

# Dom API: The dom api is a set of programming interfaces(methods) that allow developers to interact with the dom tree and manipulate the content, structure of web document.
-> With the help of DOM API, we can create, update, delete the elements, attributes, change css styles, handled events and much more. 

<!-- methods -->
1) document.getElementById("id"); = Single Element
2) document.getElementByClass("class"); = HTML Collection
3) document.getElementByTagName("tag"); = HTML Collection
4) document.querySelector(:)