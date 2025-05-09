
'use client'
import { useParams } from "next/navigation"
import { useLocationList } from "@/hooks/useLocationList";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import PageTitle from "@/components/PageTitle";

export default function Page() {

  const { id } = useParams();
  const { locations } = useLocationList();

  const location = locations.find((loc) => loc.id === id);
  if (!location) return <div>Location not found</div>;
  return (
    <section className='container mx-auto max-md:p-4 mt-4'>
      <PageTitle title="Konum Detayı" />
      <h1>{location.name}</h1>
      <p className="grid grid-cols-2 items-center">Enlem: <span>{location.coordinates.lat}</span></p>
    </section>
  )
}