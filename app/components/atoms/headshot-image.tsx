import Image from "next/image";

const HeadshotImage = () => {
  return (
    <Image
      src={"/images/headshot.jpeg"}
      alt="Picture of the author"
      fill
      className="rounded-full" // just an example
    />
  );
};

export default HeadshotImage;
