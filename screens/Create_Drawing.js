import { View } from "react-native";
import React, { useState } from "react";
import { Canvas } from "@benjeau/react-native-draw";

const Create_Drawing = () => {
  const [strokeColor, setStColor] = useState("black");
  const [defTool, setDefTool] = useState("brush");

  return (
    <View style={{ flex: 1, backgroundColor: "#e8e8e4" }}>
      <Canvas
        style={{ opacity: 0.5 }}
        color={strokeColor}
        thickness={5}
        opacity={1}
        tool={defTool}
      />
    </View>
  );
};

export default Create_Drawing;
