"use client";

import { Link } from "next-view-transitions";
import React, { useState } from "react";
import { BlurImage } from "./blur-image";
import Balancer from "react-wrap-balancer";
import { urlFor } from "@/sanity/lib/image";

export type SanityMerch = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  frontImage: any;
  backImage?: any;
};

export const MerchCard = ({ merch }: { merch: SanityMerch }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      className="shadow-derek rounded-3xl group border border-transparent hover:border-neutral-800 w-full hover:bg-neutral-900 overflow-hidden hover:scale-[1.02] transition duration-200"
      href={`/insights/${merch.slug.current}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {merch.frontImage ? (
        <BlurImage
          src={urlFor(hovered && merch.backImage ? merch.backImage : merch.frontImage).url()}
          alt={merch.title}
          height={800}
          width={800}
          className="h-72 object-cover object-center w-full rounded-3xl"
        />
      ) : (
        <div className="h-72 flex items-center justify-center group-hover:bg-neutral-900">
        </div>
      )}
      <div className="p-4 md:p-8 group-hover:bg-neutral-900">
        <p className="text-lg text-white font-bold mb-4">
          <Balancer>{merch.title}</Balancer>
        </p>
      </div>
    </Link>
  );
};