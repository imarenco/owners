"use client";

import { useState } from "react";

type Props = {
  approve: () => void;
  reject: () => void;
};

export default function Form({ reject, approve }: Props) {
  return (
    <div className="flex items-center justify-between mt-1">
      <button
        onClick={() => reject()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-black"
        type="button"
      >
        Reject
      </button>

      <button
        onClick={() => {
          approve();
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-black"
        type="button"
      >
        Approve
      </button>
    </div>
  );
}
