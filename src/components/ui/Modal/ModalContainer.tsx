"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";
import { useModal } from "./ModalProvider";
import { useEscapeKey } from "@/hooks/useEscapeKey";

type ModalContainerProps = {
  children: ReactNode;
  title?: string;
};

export default function ModalContainer({
  children,
  title,
}: ModalContainerProps) {
  const { setClose } = useModal();

  useEscapeKey(setClose);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <button
          onClick={setClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
          aria-label="Закрити модалку"
        >
          <X className="w-5 h-5" />
        </button>

        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}

        <div>{children}</div>
      </div>

      <div className="absolute inset-0" onClick={setClose} />
    </div>
  );
}
