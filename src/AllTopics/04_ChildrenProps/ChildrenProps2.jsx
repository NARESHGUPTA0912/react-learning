const ChildrenProps2 = ({ children }) => {
  return (
    <div>
      <h1>Example ChildrenProps 2</h1>
      {children}
    </div>
  );
};

export default ChildrenProps2;

// State uplifting is a technique in React where you move the state from a child component to a common parent component. This allows multiple child components to share and update the same state, enabling better communication and data flow between them. By lifting the state up, you can avoid prop drilling and make your components more reusable and maintainable.

// Props Drilling is a situation in React where you have to pass props through multiple levels of components, even if some of those components do not need the props themselves. This can lead to a lot of unnecessary code and make it harder to maintain your application. Prop drilling can be avoided by using techniques like state lifting, context API, or other state management libraries.