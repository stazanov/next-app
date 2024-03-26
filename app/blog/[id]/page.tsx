import {Metadata} from "next";
import {cookies} from "next/headers";

async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    headers: { Cookie: cookies().toString() },
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch post!");

  return response.json();
}


type Props = {
  params: {
    id: string
  }
}


export async function generateMetadata({params: {id}}: Props): Promise<Metadata> {
  const post = await getData(id)

  return {
    title: post.title
  }
}


export default async function Post({params: {id}}: Props) {
  const post = await getData(id)
  return (<>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </>)
}