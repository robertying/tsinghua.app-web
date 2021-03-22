import Image, { ImageLoader, ImageProps } from "next/image";
import { Avatar } from "@material-ui/core";

export type MyAvatarProps = Omit<ImageProps, "src"> & {
  src?: string | null;
  size?: number;
};

const loader: ImageLoader = ({ src, width, quality }) => {
  return `${
    process.env.NEXT_PUBLIC_IMAGE_URL
  }/${src}?x-oss-process=image/auto-orient,1/interlace,1/resize,m_fill,w_${width},h_${width}/quality,q_${
    quality ?? 75
  }`;
};

const MyAvatar: React.FC<MyAvatarProps> = ({
  src,
  size = 50,
  ...restProps
}) => (
  <Avatar>
    {src && (
      <Image
        loader={loader}
        src={src}
        width={size}
        height={size}
        {...restProps}
      />
    )}
  </Avatar>
);

export default MyAvatar;
