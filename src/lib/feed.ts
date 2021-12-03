import fs from 'fs';
import { Feed } from 'feed';
// import marked from 'marked';

function generatedRSSFeed(): void {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.riml.work';
    const date = new Date();
    const author = {
        name: 'Daiki Takahashi',
        email: 'riml.slime@gmail.com',
        link: 'https://www.riml.work',
    };

    const feed = new Feed({
        title: process.env.NEXT_PUBLIC_BASE_NAME || '',
        description: process.env.NEXT_PUBLIC_DESCRIPTION || '',
        id: baseUrl,
        link: baseUrl,
        language: 'ja',
        image: `${baseUrl}/favicon.png`,
        copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
        updated: date,
        feedLinks: {
            atom: `${baseUrl}/rss/atom.xml`,
            rss2: `${baseUrl}/rss/rss.xml`,
            json: `${baseUrl}/rss/json.json`,
        },
        author: author,
    });

    // TODO: フィードの記事を取得する処理を書く
    // const posts = getPosts(...);

    // posts.forEach((post) => {
    //     const url = `${baseUrl}/posts/${post}`;
    //     feed.addItem({
    //         title: post.title,
    //         description: post.description,
    //         id: url,
    //         link: url,
    //         content: marked(post.content),
    //         date: new Date(post.date),
    //     });
    // });

    fs.mkdirSync('./public/rss', { recursive: true });
    fs.writeFileSync(`./public/rss/rss.xml`, feed.rss2());
    fs.writeFileSync(`./public/rss/atom.xml`, feed.atom1());
    fs.writeFileSync(`./public/rss/json.json`, feed.json1());
}

export default generatedRSSFeed;
