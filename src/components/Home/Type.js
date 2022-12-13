import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Simpaticissimi",
					"Bellissimi",
					"Amicissimi",
					"Intelligentissimi",
					"100% ci uscirei ancora -chiunque"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
