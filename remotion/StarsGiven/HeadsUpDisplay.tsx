import { noise2D } from "@remotion/noise";
import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

export type RepoText = {
  text: string;
  opacity: number;
};

export const HeadsUpDisplay: React.FC<{
  textToDisplay: RepoText | null;
}> = ({ textToDisplay }) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 500,
          height: 100,
          marginTop: -500,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: 30,
        }}
      >
        {textToDisplay === null ? null : (
          <span
            style={{
              opacity: 0.6 + noise2D("opacity", frame / 50, 0) * 0.3,
            }}
          >
            <span
              style={{
                opacity: textToDisplay.opacity,
                fontFamily: "Seven Segment",
                fontWeight: "bold",
                maxWidth: 400,
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {textToDisplay.text}
            </span>
          </span>
        )}
      </div>
    </AbsoluteFill>
  );
};