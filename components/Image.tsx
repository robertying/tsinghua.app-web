import Image, { ImageLoader, ImageProps } from "next/image";

const fillLoader: ImageLoader = ({ src, width, quality }) => {
  return `${
    process.env.NEXT_PUBLIC_IMAGE_URL
  }/${src}?x-oss-process=image/auto-orient,1/interlace,1/resize,m_fill,w_${width},h_${width}/quality,q_${
    quality ?? 75
  }`;
};

const fitLoader: ImageLoader = ({ src, width, quality }) => {
  return `${
    process.env.NEXT_PUBLIC_IMAGE_URL
  }${src}?x-oss-process=image/auto-orient,1/interlace,1/resize,m_lfit,w_${width}/quality,q_${
    quality ?? 75
  }`;
};

const MyImage: React.FC<ImageProps & { square?: boolean }> = ({
  square,
  ...restProps
}) => {
  return <Image {...restProps} loader={square ? fillLoader : fitLoader} />;
};

export default MyImage;
