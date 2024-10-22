"use client";

import { Link } from "next-view-transitions";
import React, { useState } from "react";
import { BlurImage } from "./blur-image";
import Balancer from "react-wrap-balancer";
import { urlFor } from "@/sanity/lib/image";
import { format } from "date-fns";
import { motion } from "framer-motion";

export type SanityBlogPost = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  imageUrl: string;
  publishedAt: string;
  author: string;
  category?: string;
};

export const BlogCard = ({ blog }: { blog: SanityBlogPost }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="w-full h-full"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        className="block w-full h-full overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-lg hover:shadow-xl transition duration-300 flex flex-col"
        href={`/insights/${blog.slug.current}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative w-full aspect-[16/9]">
          {blog.imageUrl ? (
            <BlurImage
              src={urlFor(blog.imageUrl).url()}
              alt={blog.title}
              fill
              className="object-cover object-center transition duration-300 ease-in-out"
            />
          ) : (
            <div className="w-full h-full bg-neutral-800 flex items-center justify-center">
              <span className="text-neutral-400">No image available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-30 transition duration-300 ease-in-out hover:bg-opacity-20" />
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2 flex-grow">
            <Balancer>{blog.title}</Balancer>
          </h3>
          <p className="text-sm text-neutral-400 mb-4">
            {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <p className="text-sm text-neutral-300">
              By {blog.author}
            </p>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
              transition={{ duration: 0.2 }}
              className="text-blue-400 text-sm font-semibold"
            >
              Read more →
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
