import React from "react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { getDetailPost, getPosts, Post } from "@/sanity/queries/posts";
import { default as imageUrlBuilder } from "@sanity/image-url";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "./share-blog";
import { ChevronLeft, Clock, User } from "lucide-react";
import { GetServerSideProps } from 'next';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const componentsTest = {
  block: {
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="mb-6 text-lg leading-relaxed text-gray-300">{children}</p>
    ),
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-4xl font-bold mb-6 mt-12 text-white">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-3xl font-semibold mb-4 mt-10 text-white">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-2xl font-semibold mb-3 mt-8 text-white">{children}</h3>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-6 italic text-gray-400">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-6 text-gray-300">{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-6 text-gray-300">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li className="mb-2">{children}</li>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <li className="mb-2">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic text-gray-400">{children}</em>
    ),
    code: ({ children }: { children: React.ReactNode }) => (
      <code className="bg-gray-700 rounded px-1 py-0.5 text-sm text-gray-300">{children}</code>
    ),
    link: ({ children, value }: { children: React.ReactNode; value: { href: string } }) => (
      <a href={value.href} className="text-blue-400 hover:underline">
        {children}
      </a>
    ),
  },
};

// Define the type for the component props
interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = async ({ params }) => {
  const { slug } = params;
  const data = await getDetailPost(slug);
  let postsData: Post[] = await getPosts();
  postsData = postsData.filter((post) => post.slug?.current !== slug);

  const shareUrl = `https://nexus-labs.tech/insights/${slug}`;
  const shareTitle = data.title;

  return (
    <div className="min-h-screen font-sans text-gray-100">
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={data.imageUrl}
          alt={data.slug.current || ""}
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90" />
        <div className="absolute bottom-0 left-0 p-8 text-white z-10 w-full">
          <Link
            href="/insights"
            className="inline-flex items-center text-sm font-medium mb-4 hover:text-blue-400 transition-colors duration-200"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Link>
          <h1 className="text-2xl md:text-6xl font-bold mb-4 leading-tight">
            {data.title}
          </h1>
          <div className="flex flex-wrap items-center text-sm text-gray-300">
            <span className="flex items-center mr-4">
              <User className="mr-2 h-4 w-4" />
              {data.author}
            </span>
            <span className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {format(new Date(data.publishedAt), "MMMM dd, yyyy")}
            </span>
          </div>
          <div className="flex mt-4">
            {data.categories?.map((category: string, index: number) => (
              <span
                key={index}
                className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs mr-2 transition-colors duration-200 hover:bg-blue-500"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="lg:flex lg:gap-12">
          <main className="lg:w-2/3">
            <article className="rounded-lg shadow-2xl p-8 mb-12 transform hover:scale-[1.01] transition-transform duration-300">
              <div className="prose prose-lg prose-invert max-w-none">
                
                <PortableText value={data.body} />
              </div>
            </article>

            <ShareButtons shareUrl={shareUrl} shareTitle={shareTitle} />
          </main>

          <aside className="mt-16 lg:mt-0 lg:w-1/3">
            <div className="lg:sticky lg:top-8">
              <h2 className="text-3xl font-bold mb-8 text-white bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                More Insights
              </h2>
              <div className="space-y-8">
                {postsData.slice(0, 4).map((post, index) => (
                  <Link
                    key={index}
                    href={`/insights/${post.slug?.current}`}
                    className="group block"
                  >
                    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                      <div className="relative h-48 lg:h-32">
                        <Image
                          src={post.imageUrl}
                          alt={post.title || ""}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-2">
                          {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;




//import React from 'react'

// const page = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default page




