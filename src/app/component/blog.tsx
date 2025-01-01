import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";



export default function BlogCard({ post }: { post: Post }) {
  const imageUrl = post.image ? urlForImage(post.image).url() : "/placeholder-image.jpg";

  return (
    <section className="flex flex-col justify-between h-[380px] rounded ">
      {/* Image Section */}
      <div className="relative max-h-60 flex-1">
        <Image
          src={imageUrl}
          alt={post.title || "Blog Post"}
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gapx-y-4 p-4">
       
        <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
          {post.title}
        </h2>
        <p className="text-dark/70">
          {post.summary}
        </p>

        {/* Read More dynamic Link */}
        <Link
          href={`/blog/${post.slug}`}
          className="block px-4 py-1 text-center text-white bg-yellow-400 font-semibold mt-4"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
