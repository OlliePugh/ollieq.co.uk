import Image from "next/image";

const HeadshotImage = ({ className }: { className: string }) => {
  return (
    <Image
      src={"/images/headshot.jpeg"}
      alt="Picture of the author"
      priority
      fill
      className={`rounded-full ${className}`}
    />
  );
};

export default HeadshotImage;
