import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { icons } from "@yourorg/icons";

type IconName = keyof typeof icons;

@customElement("vt-icon")
export class VtIcon extends LitElement {

    static styles = css`
  :host {
    display: inline-flex;
    vertical-align: middle;
    line-height: 0;
  }

  svg {
    /* sizing */
    --icon-size: var(--vt-icon-size, 1em);
    width: var(--icon-size);
    height: var(--icon-size);

    /* color inherits from parent unless overridden */
    fill: currentColor;
    stroke: currentColor;
    stroke-width: 2;

    /* optional: crisper rendering for thin strokes */
    shape-rendering: geometricPrecision;
  }
`;

    @property({ type: String }) name: IconName = "check" as IconName;
    @property({ type: String }) size: string = "1em";
    @property({ type: String }) color?: string;
    @property({ type: String }) title?: string;

    render() {
        const raw = icons[this.name] ?? "";
        const style = `--vt-icon-size:${this.size};${this.color ? `color:${this.color};` : ""}`;

        const svg = this.title
            ? raw
                .replace("<svg ", `<svg role="img" `)
                .replace(
                    "</svg>",
                    `<title>${escapeHtml(this.title)}</title></svg>`
                )
            : raw
                .replace("<svg ", `<svg aria-hidden="true" `);


        return html`<span style=${style} .innerHTML=${svg}></span>`;
    }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


declare global {
  interface HTMLElementTagNameMap {
    "vt-icon": VtIcon;
  }
}
