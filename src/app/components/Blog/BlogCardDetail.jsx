import Image from 'next/image';
import { useParams } from 'next/navigation';
import ShareButton from './ShareButton';
import React from 'react';
import BlogSearch from './BlogSearch';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function BlogCardDetail({ cardsData }) {
  const params = useParams();
  const decodedHeadingParam = decodeURIComponent(params.blogDetails);

  const filteredCards = decodedHeadingParam
    ? cardsData.filter((card) => card.heading === decodedHeadingParam)
    : cardsData;

  const currentIndex = cardsData.findIndex((card) => card.heading === decodedHeadingParam);

  // Determine the previous and next posts
  const prevPost = currentIndex > 0 ? cardsData[currentIndex - 1] : null;
  const nextPost = currentIndex < cardsData.length - 1 ? cardsData[currentIndex + 1] : null;

  return (
    <>
      <section className="w-full bg-[#f9fafb] md:py-24 p-3">
        <div className="flex justify-center items-center flex-col max-w-screen-xl ml-auto mr-auto bg-white h-auto">
          {filteredCards.map((card, index) => (
            <div key={index} className="md:p-4 p-2 bg-white flex justify-center items-center flex-col">
              <h2 className="text-[#034E70] text-[27.2px] font-normal md:p-6 text-center mb-3">{card.heading}</h2>
              <div className="relative w-full md:h-[500px] h-[200px]">
                <Image src={card.image} layout="fill" objectFit="cover" />
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: card.details }}
                className="prose w-full md:w-9/10 lg:w-[70%] text-left md:p-6 p-0 leading-[34px]"
              />
              <BlogSearch width="w-full" />
            </div>
          ))}
          <div className="flex justify-center mb-7">
            <ShareButton />
          </div>
        </div>

        <div className="flex justify-between items-center md:mt-9 md:px-12 mt-3">
          {prevPost && (
            <Link href={`/blog/${encodeURIComponent(prevPost.heading)}`}>
              <p className='text-[#046BD2] text-[16px]'>Previous Post</p>
            </Link>
          )}
          {nextPost && (
            <Link href={`/blog/${encodeURIComponent(nextPost.heading)}`}>
              <p className='text-[#046BD2] text-[16px]'>Next Post</p>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
