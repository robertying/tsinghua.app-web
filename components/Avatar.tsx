import Image, { ImageLoader, ImageProps } from "next/image";
import { Avatar, AvatarProps } from "@material-ui/core";

export interface MyAvatarProps extends AvatarProps {
  imageProps?: Omit<ImageProps, "layout">;
  size?: number;
}

const loader: ImageLoader = ({ src, width, quality }) => {
  return `${
    process.env.NEXT_PUBLIC_IMAGE_URL
  }/${src}?x-oss-process=image/auto-orient,1/interlace,1/resize,m_fill,w_${width},h_${width}/quality,q_${
    quality ?? 75
  }`;
};

const MyAvatar: React.FC<MyAvatarProps> = ({
  src,
  alt,
  size = 40,
  imageProps,
  children,
  ...restProps
}) => (
  <Avatar {...restProps}>
    {src ? (
      <Image
        loader={loader}
        src={src}
        width={size}
        height={size}
        {...imageProps}
      />
    ) : alt ? (
      alt[0].toUpperCase()
    ) : (
      children
    )}
  </Avatar>
);

export default MyAvatar;
