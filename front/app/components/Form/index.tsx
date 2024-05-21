"use client";

import { useState } from "react";
import FormStep from "../FormStep";
import Pagination from "../Pagination";
import Approve from "../Approve";
import { CompanyInfo } from "@/app/types/company";
import { STEPS } from "@/app/utils/steps";
import { useCreateImage } from "@/app/api/useCreateImage";

type Props = {
  onSuccess: (url: string) => void;
};

export default function Form({ onSuccess }: Props) {
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState<CompanyInfo | null>(null);
  const [img, setImg] = useState<string | null>(null);
  const isLast = index === STEPS.length - 1;
  const isFirst = index === 0;
  const createImage = useCreateImage();

  async function create() {
    if (form) {
      const img = await createImage.mutateAsync(form);
      setIndex(0);
      setForm(null);
      const blobed = await img.blob();
      setImg(URL.createObjectURL(blobed));
    }
  }

  const setFormField = (key: string, value: string) =>
    setForm({ ...(form || {}), ...{ [key]: value } });

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {img ? (
        <img src={img} />
      ) : (
        <FormStep setForm={setFormField} step={STEPS[index]} />
      )}
      {img ? (
        <Approve
          approve={() => {
            onSuccess(img);
            setForm({});
            setImg(null);
          }}
          reject={() => {
            setIndex(0);
            setForm({});
            setImg(null);
          }}
        />
      ) : (
        <Pagination
          isLast={isLast}
          isFirst={isFirst}
          index={index}
          isLoading={createImage.isLoading}
          onCreate={create}
          onChangeStep={(newIndex: number) => setIndex(newIndex)}
        />
      )}
    </form>
  );
}
