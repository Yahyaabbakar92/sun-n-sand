const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const supabaseLink = (name: string) => 
`https://gspqgpzyhdhinyvtyugx.supabase.co/storage/v1/object/public/images/homePage/${name}`

const supabasePhotos = [
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 800 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 1620 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 720 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 721 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 1620 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 607 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 608 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 720 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 1549 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 720 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 694 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 1620 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 720 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 1440 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 1620 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 810 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 610 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 160 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 810 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 720 },
  { name: "image-placeholder.png?t=2023-12-19T07%3A50%3A36.744Z", width: 1080, height: 1440 },
];

const images = supabasePhotos.map((image) => ({
  src: supabaseLink(image.name),
  width: image.width,
  height: image.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((image.height / image.width) * breakpoint);
    return {
      src: supabaseLink(image.name),
      width: breakpoint,
      height,
    };
  }),
}))

export default images;