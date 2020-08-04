import React from "react";
import ConfigButton from "./ConfigButton";
import Config from "./Config";
import { observer, Provider } from "mobx-react";
import stores from "../stores";
import { watch } from "../lib/MutationObserver";
import { renderMarkdown } from "../lib/Markdown";

@observer
export default class App extends React.Component<
  Record<string, unknown>,
  Record<string, unknown>
> {
  public componentDidMount() {
    watch("body", () => {
      if (!stores.ConfigStore.renderMarkdown) {
        return;
      }

      Array.from(
        document.querySelectorAll("div.status__content__text")
      ).forEach((element) => {
        if (!element.classList.contains("marked")) {
          const div = element as HTMLDivElement;
          div.classList.add("marked");
          div.dataset["original"] = div.outerHTML;
          const markdown = renderMarkdown(div as HTMLDivElement);
          div.innerHTML = "";
          const container = document.createElement("div");
          container.innerHTML = markdown;
          div.insertAdjacentElement("beforeend", container);
        }
      });
    });
  }

  public render() {
    return (
      <Provider {...stores}>
        <ConfigButton />
        {stores.ConfigStore.open && <Config />}
      </Provider>
    );
  }
}
