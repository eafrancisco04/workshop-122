import { useState, useEffect } from "react";

function State() {
  // let name = "Will";
  const [name, setName] = useState("Will Smith");
  const [age, setAge] = useState(53);

  const handleClick = () => {
    setName("Bill Gates");
    setAge(66);
  };

  // Track state of component and any side effects
  // Equivalent of componentDidMount, componentUpdate, and componentUnmount (we will look at this more in depth in the coming weeks)
  useEffect(() => {
    console.log(`${name} state is loaded`);
  }, []); // useEffect dependency to improve the performance of our application by making sure the component is not reloaded when the state of this compontent is changed.

  useEffect(() => {
    console.log(`${age} state is loaded`);
  }, []);

  return (
    <>
      <h1>React State Hook</h1>
      <p>
        My name is {name} and I am {age} years old.
      </p>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default State;
