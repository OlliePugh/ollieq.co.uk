"use client";
import {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";

interface ImageLoaderProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  useNext?: boolean;
}

const ImageLoader = ({
  alt,
  src,
  className,
  useNext = true,

  ...props
}: ImageLoaderProps) => {
  const [loaded, setLoaded] = useState(false);

  const image = useRef<HTMLImageElement | null>(null);

  const handleLoad = () => setLoaded(true);

  useEffect(() => {
    if (image.current?.complete === true) setLoaded(true);
  }, []);

  return (
    <>
      <div
        className={`absolute ${
          loaded ? "hidden" : "visible"
        } bg-gray-200 rounded-md dark:bg-gray-700 animate-pulse w-full h-full`}
      />

      {useNext ? (
        <Image
          onLoad={handleLoad}
          alt={alt || ""}
          src={src || ""}
          loading="lazy"
          className={className}
          fill
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={image}
          onLoad={handleLoad}
          alt={alt}
          src={src}
          loading="lazy"
          className={className}
          {...props}
        />
      )}
    </>
  );
};

export default ImageLoader;
