export function dateToLocal(dt: Date): string {
  let nd = new Date(dt.valueOf());
  nd.setDate(nd.getDate() + 1);
  return nd.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
  });
}
