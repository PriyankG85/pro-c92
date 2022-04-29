import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import { Canvas } from "@benjeau/react-native-draw";
import ViewShot, { captureRef } from "react-native-view-shot";
import Slider from "react-native-slider";

const Create_Drawing = ({ navigation }) => {
  const canvasRef = useRef(null);
  const viewshotRef = useRef(null);

  const [strokeColor, setStColor] = useState("black");
  const [defTool, setTool] = useState("brush");
  const [brushProperties, setBrushProperties] = useState(false);
  const [thickness, setThickness] = useState(3);

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };

  const captureDrawing = () => {
    captureRef(viewshotRef, {
      format: "png",
      quality: 0.9,
    }).then(
      (uri) => {
        navigation.push("PreviewSelectedArt", { imgUri: uri });
      },
      (error) => console.error("Oops, snapshot failed", error)
    );
  };

  const colorPalete = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "black",
    "white",
    "#90e0ef",
    "#3a0ca3",
    "#ffc6ff",
    "#f07167",
    "#ff006e",
    "#9d4edd",
    "#b7094c",
    "#fe7434",
    "#ffea00",
    "#ffd000",
    "#ffaa00",
    "#001845",
    "#e0c3fc",
    "#dab6fc",
    "#bbadff",
    "#9fa0ff",
    "#d7e3fc",
    "#ccff33",
    "#70e000",
    "#38b000",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.tools}>
        {brushProperties ? (
          <View style={{ flex: 1, paddingHorizontal: 5 }}>
            <View>
              <View style={{ flexDirection: "row" }}>
                <ScrollView
                  horizontal={true}
                  style={{ marginBottom: 10, paddingBottom: 10 }}
                >
                  {colorPalete.map((color, i) => (
                    <TouchableOpacity
                      style={{
                        margin: 2,
                        borderWidth: 1.5,
                        borderColor: "black",
                        borderRadius: 3,
                      }}
                      key={i}
                      onPress={() => {
                        setStColor(color);
                        defTool !== "brush" && setTool("brush");
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: color,
                          width: 25,
                          height: 25,
                        }}
                      />
                    </TouchableOpacity>
                  ))}
                </ScrollView>

                <TouchableOpacity
                  style={{ marginHorizontal: 5 }}
                  onPress={() => setBrushProperties(false)}
                >
                  <Image
                    style={{ width: 27, height: 27 }}
                    source={{
                      uri: "https://img.icons8.com/material-outlined/344/delete-sign.png",
                    }}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.sliderContainer}>
                <Slider
                  value={thickness}
                  trackStyle={{ backgroundColor: "#4361ee" }}
                  thumbStyle={{
                    borderWidth: 2,
                    borderColor: "#06d6a0",
                    backgroundColor: "#001219",
                  }}
                  minimumValue={1}
                  maximumValue={20}
                  animationType={"spring"}
                  animateTransitions={true}
                  onValueChange={(value) => setThickness(value)}
                />
              </View>
            </View>
          </View>
        ) : (
          <>
            <TouchableOpacity
              style={styles.toolBtn}
              onPress={() => setBrushProperties(true)}
            >
              <Image
                source={require("../assets/brush.png")}
                resizeMode={"cover"}
                style={{
                  width: 28,
                  height: 28,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={
                defTool === "brush"
                  ? styles.toolBtn
                  : { ...styles.toolBtn, borderWidth: 1.5, borderColor: "#000" }
              }
              onPress={() =>
                defTool === "brush" ? setTool("eraser") : setTool("brush")
              }
            >
              <Image
                source={require("../assets/eraser.png")}
                resizeMode={"cover"}
                style={{
                  width: 28,
                  height: 28,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleUndo}>
              <Text style={styles.btnText}>Undo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleClear}>
              <Text style={styles.btnText}>Clear</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={captureDrawing}>
              <Text style={styles.btnText}>Save</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* {snapshot.length !== 0 ? (
        <Image
          style={{ position: "absolute", width: "100%", height: "100%" }}
          source={{ uri: snapshot }}
        />
      ) : ( */}
      <ViewShot ref={viewshotRef} style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <Canvas
            ref={canvasRef}
            style={{ flex: 1 }}
            color={strokeColor}
            thickness={thickness}
            opacity={1}
            tool={defTool}
          />
        </View>
      </ViewShot>
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e4",
  },

  tools: {
    paddingVertical: 25,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 7,
    backgroundColor: "#4285f4",
    borderWidth: 1.5,
    borderColor: "#fff",
  },

  btnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },

  toolBtn: {
    padding: 2,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },

  sliderContainer: {
    flex: 1,
    marginHorizontal: 13,
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export default Create_Drawing;
