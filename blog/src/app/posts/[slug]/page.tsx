import { getPostData } from "@/service/posts"
import { redirect } from "next/navigation";

type Props={
  params: {
    slug: string;
  };
}
export default async function PostPage({ params: { slug } }: Props) {
  const data = await getPostData(slug);
  console.log('데이터', data);
  if (!data) {
    redirect('/posts'); // 없는 주소로 들어가면 여기로
    // notFound();
  }
  return (
    <>
    <h1>{data.title}</h1>
    <pre>{data.content}</pre>
    </>
  )
}
