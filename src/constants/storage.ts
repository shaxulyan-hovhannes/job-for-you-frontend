const FILTER_SIDE_STORAGE_KEY = "filter_side" as const;

const FILTER_SIDES = {
  left: "left",
  right: "right",
} as const;

const FILTER_SIDE_DEFAULT_VALUE = FILTER_SIDES.left;

const LISTING_VIEW_MODE_STORAGE_KEY = "listing_view_mode" as const;

const LISTING_VIEW_MODES = {
  list: "list",
  grid: "grid",
} as const;

const LISTING_VIEW_MODE_DEFAULT_VALUE = LISTING_VIEW_MODES.list;

export {
  FILTER_SIDE_STORAGE_KEY,
  FILTER_SIDES,
  FILTER_SIDE_DEFAULT_VALUE,
  LISTING_VIEW_MODE_STORAGE_KEY,
  LISTING_VIEW_MODES,
  LISTING_VIEW_MODE_DEFAULT_VALUE,
};
