"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Form from "./components/Form";
import ImageList from "./components/ImageList";

export default function Home() {
  const queryClient = new QueryClient();
  const [images, setImages] = useState<string[]>([]);

  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex w-full flex-col items-center justify-between">
          <div className="w-full max-w-xs">
            <Form
              onSuccess={(image: string) => setImages(images.concat(image))}
            />
          </div>
          {images.length > 0 && (
            <div className="w-full">
              <h3>Historical</h3>
              <ImageList images={images} />
            </div>
          )}
        </div>
      </main>
    </QueryClientProvider>
  );
}
