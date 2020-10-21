import mustache from "mustache";

export const format = (template, data) => {
  const rendered = mustache.render(template, data);

  return rendered;
};
