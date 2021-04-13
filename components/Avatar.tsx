import { Avatar, AvatarProps } from "@material-ui/core";

export interface MyAvatarProps extends AvatarProps {
  size: "small" | "medium" | "large";
}

const MyAvatar: React.FC<MyAvatarProps> = ({
  src,
  alt,
  size,
  children,
  ...restProps
}) => (
  <Avatar {...restProps}>
    {src ? (
      <picture css={{ width: "100%", height: "100%" }}>
        <source
          type="image/webp"
          srcSet={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}/avatar-webp-${size}`}
        />
        <img
          css={{ width: "100%", height: "100%" }}
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}/avatar-${size}`}
          alt={alt}
        />
      </picture>
    ) : alt ? (
      alt[0].toUpperCase()
    ) : (
      children
    )}
  </Avatar>
);

export default MyAvatar;
