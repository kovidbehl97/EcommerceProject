import styles from '@/app/ui/home.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="">
      <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">E-commerce Store</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-800">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {/* Example product card */}
          <div className="bg-white rounded-lg shadow p-6">
            <Image
              src="/hat.jpg"
              width={200}
              height={200}
              className="w-full h-96 object-cover rounded-t-lg"
              alt="hat"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Product Name</h3>
            <p className="mt-2 text-gray-600">$100.00</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <Image
              src="/jeans.jpg"
              width={200}
              height={200}
              className="w-full h-96 object-cover rounded-t-lg"
              alt="hat"
            />            <h3 className="mt-4 text-xl font-semibold text-gray-900">Product Name</h3>
            <p className="mt-2 text-gray-600">$100.00</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <Image
              src="/shirt.jpg"
              width={200}
              height={200}
              className="w-full h-96 object-cover rounded-t-lg"
              alt="hat"
            />            <h3 className="mt-4 text-xl font-semibold text-gray-900">Product Name</h3>
            <p className="mt-2 text-gray-600">$100.00</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
          {/* Add more product cards as needed */}
        </div>
      </main>
      <footer className="bg-white shadow mt-6">
        <div className="container mx-auto px-4 py-6">
          <p className="text-gray-600">© 2024 E-commerce Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </main>
  );
}
