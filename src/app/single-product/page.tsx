"use client";
import { Suspense } from 'react';
import SingleProductPage from "@/components/ProductPageClient";
import { useSearchParams } from 'next/navigation';

function ProductPageContent() {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");

  if (!id) {
    return <div>Product ID not found</div>;
  }

  return <SingleProductPage id={id} />;
}

export default function SingleProduct() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductPageContent />
    </Suspense>
  );
}