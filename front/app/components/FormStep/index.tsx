"use client";

import { useEffect, useRef } from "react";
import { Step } from "../../types/step";

type Props = {
  setForm: (key: string, value: string) => void;
  step: Step;
};

export default function FormStep({ step, setForm }: Props) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {step.title}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={step.key}
        key={step.key}
        type="text"
        onChange={(event) => setForm(step.key, event.target.value)}
      />
    </div>
  );
}
