import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "No Q-drivng",
          "No Toll",
          "No Parking Fee",
          "No Insurance",
          "Born Electric",
          "No Plastics",
          "Built for Urbaners",
          "Built for Parents",
          "Built for Students",
          "Built to last"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
