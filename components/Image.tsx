/* eslint-disable @next/next/no-img-element */

const MyImage: React.FC<React.PropsWithChildren<React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>>> = (props) => {
  const { alt, src, ...restProps } = props;

  return src?.endsWith(".svg") ? (
    <img
      {...restProps}
      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}`}
      alt={alt}
    />
  ) : (
    <picture {...restProps}>
      <source
        type="image/webp"
        srcSet={`
                ${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}/webp-small 420w,
                ${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}/webp-medium 840w,
                ${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}/webp-large 1280w
                `}
        sizes={`
                (min-width: 600px) 600px,
                100vw
                `}
      />
      <img
        {...restProps}
        srcSet={`
                ${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}/default-small 420w,
                ${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}/default-medium 840w,
                ${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}/default-large 1280w
                `}
        sizes={`
                (min-width: 600px) 600px,
                100vw
                `}
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${src}/default-medium`}
        alt={alt}
      />
    </picture>
  );
};

export default MyImage;
