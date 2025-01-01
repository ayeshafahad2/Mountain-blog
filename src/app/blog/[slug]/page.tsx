import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import ReviewPage from "@/app/component/review";

export const revalidate = 60; // seconds

export async function generateStaticParams() {
  const query = `*[_type=='post']{
    "slug": slug.current
  }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((item: { slug: string }) => item.slug);
  return slugRoutes.map((slug: string) => ({ slug }));
}

// To create static pages for dynamic routes
export default async function Page({ params }: { params: { slug: string } }) {
  const query = `*[_type=='post' && slug.current=="${params.slug}"]{
    title,summary,image,content,
    author->{bio,image,name}
  }[0]`;
  const post = await client.fetch(query);

  if (!post) {
    return <div>Post not found</div>;
  }

  // Ensure `post.image` and `post.author.image` are handled correctly
  const featuredImage = post.image ? urlForImage(post.image).url() : "/placeholder-image.jpg";
  const authorImage = post.author?.image ? urlForImage(post.author.image).url() : "/author-placeholder.jpg";

  return (
    <div className="flex justify-center items-center px-4 sm:px-8 lg:px-12">
      <article className="mt-12 mb-24 w-full max-w-4xl flex flex-col gap-y-8">
        {/* Featured Image */}
        <div className="flex justify-center">
          <Image
            src={featuredImage}
            width={500}
            height={500}
            alt={post.title || "Featured Image"}
            className="rounded w-3/4 h-96 object-cover"
          />
        </div>

        {/* Blog Title */}
        <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light text-center">
          {post.title}
        </h1>

        {/* Author Section (Image & Bio) */}
        <section className="flex gap-2 xs:gap-4 sm:gap-6 items-center justify-center px-2 sm:px-8 md:px-12">
          <Image
            src={authorImage}
            width={96}
            height={96}
            alt={post.author?.name || "Author"}
            className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-dark dark:text-light text-center sm:text-left">
              {post.author?.name || "Unknown Author"}
            </h3>
            <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80 text-center sm:text-left">
              {post.author?.bio || "Content Writer"}
            </p>
          </div>
        </section>

        {/* Blog Summary Section */}
        <section className="text-center">
          <p className="md:text-2xl leading-relaxed text-dark/80 dark:text-light/80">
            {post.summary}
          </p>
        </section>

        {/* Main Body of Blog */}
        <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose prose-lg dark:prose-invert max-w-none">
          <PortableText value={post.content} />
        </section>
        
        {/* Review Section */}
        <ReviewPage />
      </article>
    </div>
  );
}

