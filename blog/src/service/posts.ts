import { readFile } from "fs/promises";
import path from "path";

export type Post = {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    featured:boolean;
}

export async function getFeaturedPosts(): Promise<Post[]> {
    return getAllPosts().then(posts => posts.filter(post => post.featured))
}

// Promise의 Post[]을 반환한다고 약속
export async function getAllPosts(): Promise<Post[]>{
    const filePath = path.join(process.cwd(), 'data', 'posts.json');
    return readFile(filePath, 'utf-8')
        .then<Post[]>(data => JSON.parse(data))
        .then(posts => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
    // then(JSON.parse) 축약 버전임.
}