export const getBadgeInfo = (badgeInfo: string): string => {
  const parsedBadgeInfo = badgeInfo.split(" ").join("").toLowerCase();

  const badgeInfoMap = {
    caringpassionately: "pink",
  } as { [key: string]: string };

  return badgeInfoMap[parsedBadgeInfo];
};
