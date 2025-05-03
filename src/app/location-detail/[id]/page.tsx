
import PageWrapper from "./PageWrapper"

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())

  const posts = localStorage.getItem('savedPlaces')
  const savedPost = JSON.parse(posts)
  return savedPost?.map((post: any) => ({
    slug: post.id,
  }))
}

export default async function Page({
  params, }: { params: Promise<{ slug: string }> }) {
  const { id } = await params
  return (<section>
    <PageWrapper pageData={id} />

  </section>)
}