// packages/icon-web/src/company-icon.ts
import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { icons } from "@josephaw1022/company-icons-icons";

@customElement("company-icon")
export class CompanyIcon extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      vertical-align: middle;
      line-height: 0;
    }

    svg {
      width: var(--company-icon-size, 1em);
      height: var(--company-icon-size, 1em);
      fill: currentColor;
      stroke: currentColor;
    }
  `;

  @property({ type: String }) name = "";
  @property({ type: String }) size = "1em";
  @property({ type: String }) color?: string;
  @property({ type: String }) label?: string;

  @state() private _svg = "";

  connectedCallback() {
    super.connectedCallback();
    this._updateSvg();
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has("name") || changed.has("label")) {
      this._updateSvg();
    }
  }

  private _updateSvg() {
    const raw = (icons as Record<string, string>)[this.name];
    if (!raw) {
      this._svg = "";
      return;
    }

    const svg =
      this.label
        ? raw
            .replace("<svg ", '<svg role="img" ')
            .replace("</svg>", `<title>${escapeHtml(this.label)}</title></svg>`)
        : raw
            .replace("<svg ", '<svg aria-hidden="true" ');
    this._svg = svg;
  }

  render() {
    const style = [
      `--company-icon-size:${this.size}`,
      this.color ? `color:${this.color}` : ""
    ]
      .filter(Boolean)
      .join(";");

    return html`<span style=${style}>${unsafeHTML(this._svg)}</span>`;
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
    "company-icon": CompanyIcon;
  }
}
