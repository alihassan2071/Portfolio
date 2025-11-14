import React from "react";
import Beams from "../SubComponents/Beam";
const Beam = () => {
  return (
    <div className="w-[100%] h-[100vh] absolute -z-10">
      <Beams
        beamWidth={2.5}
        beamHeight={15}
        beamNumber={19}
        lightColor="#FFFFFF"
        speed={2}
        noiseIntensity={1.75}
        scale={0.2}
        rotation={20}
      />
    </div>
  );
};

export default Beam;
