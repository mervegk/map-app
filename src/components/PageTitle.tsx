export default function PageTitle({ title }: { title: string }) {
  return <div className="p-2 sm:py-4 mb-3">
    <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
  </div>
}