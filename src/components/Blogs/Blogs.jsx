/* eslint-disable no-unused-vars */
import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-blue-100 p-8 rounded-lg mb-8">
        <h1 className="text-xl font-bold mb-4">When should we use Context API?</h1>
        <p>
          The Context API in React is crucial for efficient state management and
          avoiding prop drilling in large applications. It is ideal for global
          state, theming, and dynamic configurations, enhancing code
          organization and scalability.
        </p>
      </div>
      <div className="bg-green-100 p-8 rounded-lg mb-8">
        <h1 className="text-xl font-bold mb-4">What is Custom hook?</h1>
        <p>
          A custom hook in React is a reusable JavaScript function that
          encapsulates logic, enabling components to share and reuse stateful or
          side-effect-related code, promoting code organization and reusability.
        </p>
      </div>
      <div className="bg-red-100 p-8 rounded-lg mb-8">
        <h1 className="text-xl font-bold mb-4">What is useRef?</h1>
        <p>
          useRef in React is a hook that returns a mutable object, current,
          which persists across renders. It is often used to access and interact
          with the DOM directly or to persist values between renders without
          causing re-renders.
        </p>
      </div>
      <div className="bg-orange-100 p-8 rounded-lg mb-8">
        <h1 className="text-xl font-bold mb-4">What is useMemo?</h1>
        <p>
          useMemo is a React hook used for memoization. It memorizes the result
          of a computation during renders, optimizing performance by preventing
          unnecessary recalculations, especially in scenarios with heavy
          computations or expensive function calls.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
