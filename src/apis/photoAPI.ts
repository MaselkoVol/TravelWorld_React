type OrientationType = "landscape" | "portrait" | "square";
type SizeType = "large" | "medium" | "small";

type PhotosParams = {
  query: string;
  amount: number;
  page?: number;
  orientation?: OrientationType;
  size?: SizeType;
  color?: string;
};

export class PhotoAPI {
  static async fetchPhotos({
    query,
    amount,
    page,
    size,
    orientation,
    color,
  }: PhotosParams) {
    const response = await fetch(
      `https://api.pexels.com/v1/search?
			query=${query}
			&per_page=${amount}
			${page ? "&page=" + page : ""}
			${size ? "&size=" + size : ""}
			${orientation ? "&orientation=" + orientation : ""}
			${color ? "&color=" + color : ""}`,
      {
        method: "GET",
        headers: {
          Authorization: process.env.REACT_APP_API_KEY
            ? process.env.REACT_APP_API_KEY
            : "",
        },
      }
    );
    const photos = await response.json();
    return photos as SearchImageResult;
  }
}

export type PhotoType = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: string;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
};

export type SearchImageResult = {
  total_results: number;
  page: number;
  per_page: number;
  photos: PhotoType[];
  next_page: string;
};
