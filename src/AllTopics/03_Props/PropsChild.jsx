// const PropsChild = (props) => {
//     console.log(props);   // props is an object that contains all the properties passed from the parent component {data: "Hi"}
//     return (
//         <div>
//             <h1>PropsChild {props.data1}</h1>
//             <h1>{props.x.data1}</h1>
//             <h2>{props.x.data2}</h2>
//         </div>
//     );
// };


const PropsChild = (props) => {
  console.log(props);

  let { value1, value2, value3 } = props;

  return (
    <div>
      <h1>PropsChild </h1>
      <h2>Value 1 is {value1}</h2>
      <h2>Value 2 is {value2}</h2>
      <h2>Value 3 is {value3.firstname}</h2>
    </div>
  );
};

export default PropsChild;