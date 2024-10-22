import React from "react";
import { Link } from "next-view-transitions";
import { BlurImage } from "./blur-image";
import Balancer from "react-wrap-balancer";
import { urlFor } from "@/sanity/lib/image";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { SanityBlogPost } from "./blog-card";
import { ArrowRight } from "lucide-react";

export const FeaturedBlogCard = ({ blog }: { blog: SanityBlogPost }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-lg">
      <div className="absolute inset-0 z-0">
        {blog.imageUrl ? (
          <BlurImage
            src={urlFor(blog.imageUrl).url()}
            alt={blog.title}
            fill
            className="object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-neutral-800" />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative z-10 p-5 md:p-6 flex flex-col justify-end min-h-[40vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            <Balancer>{blog.title}</Balancer>
          </h2>
          <p className="text-sm md:text-base text-neutral-300 mb-3">
            {blog.author} • {format(new Date(blog.publishedAt), "MMM dd, yyyy")}
          </p>
          <Link
            href={`/insights/${blog.slug.current}`}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition duration-300 group"
          >
            Read Article
            <ArrowRight className="ml-1 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};