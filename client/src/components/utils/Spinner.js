import React, { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";

const Spinner = () => {
  const [Count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preValue) => -- preValue);
    }, 1000);

    Count === 0 && navigate("/login",{
        state: location.pathname
    });
    return () => clearInterval(interval);
  }, [Count, navigate,location]);

  return (
    <div class="d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}}>
      <h1 className="Text-Center">redirecting to you in {Count} seconds....</h1>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;