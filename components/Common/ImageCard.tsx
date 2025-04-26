"use client";

import Image from "next/image";
import Link from "next/link";

interface ImageCardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl?: string;
}

export default function ImageCard({
  title,
  description,
  imageUrl,
  linkUrl = "#",
}: ImageCardProps) {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <Link href={linkUrl}>
        <div className="relative h-60 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="rounded-t-lg object-cover"
          />
        </div>
      </Link>
      <div className="p-5">
        <Link href={linkUrl}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
