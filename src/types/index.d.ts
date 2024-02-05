export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
  };
  content: string;
  slug?: string;
};

export type Post = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    categories: string[];
    author: string;
    tags: string[];
    date?: string;
    draft?: boolean;
  };
  slug?: string;
  content?: string;
};

export type Author = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    social: [
      {
        name: string;
        icon: string;
        link: string;
      },
    ];
  };
  content?: string;
  slug?: string;
};

export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Testimonial = {
  name: string;
  designation: string;
  avatar: string;
  content: string;
};

export type Call_to_action = {
  enable?: boolean;
  title: string;
  description: string;
  image: string;
  button: Button;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

export type RoomDetails = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    alt: string
    guests: string;
    beds: string;
    room_size: string;
    room_info?: string;
    amenities: string[];
    price?: string;
    general_information: string[];
    pictures: Array<RoomPictures>;
  };
  slug?: string;
  content?: string;
};

export type ConfRoomDetails = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    info?: string;
    image?: string;
    capacity: string;
    size: string;
    event_type: string;
    pictures: Array<RoomPictures>;
  };
  slug?: string;
  content?: string;
};

export type Events = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    info: string;
    image?: string;
  };
  content?: string;
  slug?: string;
};

export type Services = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    info: string;
  };
  content?: string;
  slug?: string;
};

export type Stories = {
  title: string;
  image: string;
  alt: string;
  content: string;
  bulletpoints?: string[];
  button: button;
};

export type RoomPictures = {
  name: string;
  url: string;
  alt: string;
};

export type ConfRoomPictures = {
  name: string;
  url: string;
  alt: string;
};