'use client'
import { useParams } from "next/navigation"
import { useLocationList } from "@/hooks/useLocationList";
import PageTitle from "@/components/PageTitle";
import PageWrapper from "./PageWrapper";

export default function Page() {
  const { id } = useParams();
  const { locations } = useLocationList();

  const location = locations.find((loc) => String(loc.id) === id);

  if (!location) return <div>Location not found</div>;

  return (
    <section className='container mx-auto max-md:p-4 mt-4 pb-2'>
      <PageTitle title="Konum Detayı" />
      <PageWrapper pageData={location} />
    </section>
  );
}
