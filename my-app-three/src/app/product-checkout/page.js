'use client'

import { useRouter } from 'next/navigation'

export default function ProductCheckout() {
  const router = useRouter();
  const handleConfirm = () => {
    if (confirm('Are you sure?')) {
      router.push('/');
    }
  };
  return (
    <>
      <h1>Product Checkout Page</h1>
        <button onClick={handleConfirm}>Confirm</button>


    </>
  );
}
