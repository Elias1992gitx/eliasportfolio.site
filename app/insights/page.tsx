'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BlogCard, SanityBlogPost } from "@/components/blog-card"
import { getPosts } from "@/sanity/queries/posts"
import { FeaturedBlogCard } from "@/components/featured-blog-card"

const POSTS_PER_PAGE = 6;

const InsightsPage = () => {
  const [postsData, setPostsData] = useState<SanityBlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const controls = useAnimation();

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPostsData(posts);
    };
    fetchPosts();
    controls.start("animate");
  }, [controls]);

  const categories = Array.from(new Set(postsData.flatMap(post => post.category || [])));

  const filteredPosts = postsData.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedCategory || post.category === selectedCategory)
  );

  const latestPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  const totalPages = Math.ceil(remainingPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = remainingPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-500 to-purple-600"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            My Tech Musings
          </motion.h1>
          <motion.p 
            className="text-gray-300 mb-8 text-lg sm:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Welcome to my digital garden. Here, I share my thoughts on tech, innovation, and the future.
          </motion.p>
        </motion.div>

        {latestPost && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <FeaturedBlogCard blog={latestPost} />
          </motion.div>
        )}

        <AnimatePresence>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {paginatedPosts.map((post, index) => (
              <motion.div
                key={post._id}
                className="w-full h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 1.2 + 0.1 * index, duration: 0.5 }}
              >
                <BlogCard blog={post} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-16 border-t border-gray-800 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-300">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedCategory === null ? "secondary" : "ghost"}
              onClick={() => setSelectedCategory(null)}
              className="transition-all duration-300 ease-in-out hover:scale-105 focus:ring-2 focus:ring-blue-500"
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "secondary" : "ghost"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300 ease-in-out hover:scale-105 focus:ring-2 focus:ring-blue-500"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
        >
          Showing {paginatedPosts.length} of {filteredPosts.length} posts
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="mt-12 flex justify-center items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.5 }}
          >
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center space-x-2 transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "secondary" : "ghost"}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-full transition-all duration-300 ease-in-out ${
                    currentPage === page
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {page}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center space-x-2 transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default InsightsPage;