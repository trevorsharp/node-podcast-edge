/** Attach a multimedia file to this item.  */
export interface ItemEnclosure {
  /** Url to the related file. */
  url: string;
  /** Number of bytes in the file. The length field will defualt to 0 if the `size` field has not been set. */
  size?: number;
  /** Mime type of the file. */
  type: string;
}
