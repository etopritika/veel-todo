"use client";
import { ReactNode, useState } from "react";

type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
};

export default function Tooltip({
  children,
  content,
  position = "top",
}: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-flex items-center justify-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div
          className={`absolute z-10 ${getPosition(
            position
          )} pointer-events-none`}
        >
          <div className="bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap shadow-md">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

const getPosition = (position: TooltipProps["position"]) => {
  switch (position) {
    case "top":
      return "bottom-full mb-2 left-1/2 transform -translate-x-1/2";
    case "bottom":
      return "top-full mt-2 left-1/2 transform -translate-x-1/2";
    case "left":
      return "right-full mr-2 top-1/2 transform -translate-y-1/2";
    case "right":
      return "left-full ml-2 top-1/2 transform -translate-y-1/2";
    default:
      return "";
  }
};
