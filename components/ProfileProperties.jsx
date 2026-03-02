"use client";
import deleteProperty from "@/app/actions/deleteProperty";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ProfileProperties({ properties: initialProperties }) {
  const [properties, setProperties] = useState(initialProperties);

  const handleDeleteProperpty = async (propertyId) => {
    const confirmed = window.confirm('are u sure u want delete the property');
    if(!confirmed) return;
    await deleteProperty(propertyId);
    const updatedProperties = properties.filter(property => property._id !== propertyId);
    setProperties(updatedProperties);
    toast.success('Poperty Delete Succesfully')
  }
  return properties.length > 0 ? properties.map((property) => (
    <div key={property._id} className="mb-10">
      <Link href="/">
        <Image
          className="h-32 w-full rounded-md object-cover"
          src={property.images[0]}
          width={1000}
          height={200}
          alt="Property 1"
        />
      </Link>
      <div className="mt-2">
        <p className="text-lg font-semibold">{property.name}</p>
        <p className="text-gray-600">Address: {property.location?.street}</p>
      </div>
      <div className="mt-2">
        <Link
          href={`/properties/${property._id}/edit`}
          className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
        >
          Edit
        </Link>
        <button onClick={() => handleDeleteProperpty(property._id)}
          className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  )) : (
    <div>
        No Properties Found
    </div>
  );
}
