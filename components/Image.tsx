import Image, { ImageLoader, ImageProps } from "next/image";

const loader: ImageLoader = ({ src, width, quality }) => {
  return `${
    process.env.NEXT_PUBLIC_IMAGE_URL
  }${src}?x-oss-process=image/auto-orient,1/interlace,1/resize,m_lfit,w_${width}/quality,q_${
    quality ?? 75
  }`;
};

const MyImage: React.FC<ImageProps> = (props) => {
  return <Image {...props} loader={loader} />;
};

export default MyImage;
