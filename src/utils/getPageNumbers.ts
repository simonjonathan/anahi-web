import { SITE } from "@config";

const getPageNumbers = (numberOfPosts: number) => {
  // Handle zero posts
  if (numberOfPosts <= 0) {
    return [];
  }

  const numberOfPages = numberOfPosts / Number(SITE.postPerPage);

  let pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }

  return pageNumbers;
};

export default getPageNumbers;
