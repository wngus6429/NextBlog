import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};
//! 타입을 정의하면서 기존 Post타입과 추가적으로 더해짐
export type PostData = Post & { content: string };

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

// Promise의 Post[]을 반환한다고 약속
export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>((data) => JSON.parse(data))
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
  // then(JSON.parse) 축약 버전임.
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const metadata = await getAllPosts().then(posts => posts.find(post => post.path === fileName));
  if(!metadata) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`)
  const content = await readFile(filePath, 'utf-8');
  return { ...metadata, content};
}