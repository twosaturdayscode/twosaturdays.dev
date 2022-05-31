import markdownIt from "markdown-it";
import emoji from "markdown-it-emoji";
import mark from "markdown-it-mark";
import container from "markdown-it-container";
import prism from "markdown-it-prism";

/**
 *
 * @param {string} source
 * @returns
 */
export async function mdToHtml(source) {
  const md = new markdownIt({
    linkify: true,
    typographer: true,
  });

  md.use(emoji);
  md.use(mark);
  md.use(containerPlugin);
  md.use(prism);

  return md.render(source);
}

function containerPlugin(md) {
  md.use(...createContainer("tip", "Tip"))
    .use(...createContainer("info", "Info"))
    .use(...createContainer("insight", " Insight"))
    .use(...createContainer("target", " Target"))
    .use(...createContainer("warning", "Warning"))
    .use(...createContainer("danger", "Warning"))
    .use(...createContainer("details", "Details"));
}

function createContainer(className, defaultTitle) {
  const containerIcons = {
    tip: "ℹ️",
    info: "ℹ️",
    insight: "ℹ️",
    target: "🎯",
    warning: "⚠️",
    danger: "❌",
  };

  return [
    container,
    className,
    {
      render(tokens, idx) {
        const token = tokens[idx];
        const info = token.info.trim().slice(className.length).trim();
        if (token.nesting === 1) {
          if (className === "details") {
            return `<details class="${className} custom-block">${
              info ? `<summary>${info}</summary>` : ""
            }\n`;
          }

          return `<div class="${className} custom-block"><div class="custom-block-header">
          <span class="custom-block-icon">${containerIcons[className]}</span>
          <span class="custom-block-title">${
            info || defaultTitle
          }</span></div>\n`;
        } else {
          return className === "details" ? `</details>\n` : `</div>\n`;
        }
      },
    },
  ];
}
