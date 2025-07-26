import React, { useContext } from "react";
import { productContext } from "../../context/ProductContext";
import { AlertTriangle } from "lucide-react";

export default function ErrorMessage() {
  const { errorMessage } = useContext(productContext);

  if (!errorMessage) {
    return null;
  }

  return (
    <div className="flex items-center justify-center p-6 my-10">
      <div className="flex flex-col items-center p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/30 text-red-800 dark:text-red-300 rounded-2xl shadow-md max-w-lg">
        <AlertTriangle className="w-12 h-12 mb-4 text-red-500" />
        <h2 className="text-2xl font-semibold mb-2">An Error Occurred</h2>
        <p className="text-center text-red-700 dark:text-red-300 text-sm sm:text-base">
          {errorMessage}
        </p>
      </div>
    </div>
  );
}
