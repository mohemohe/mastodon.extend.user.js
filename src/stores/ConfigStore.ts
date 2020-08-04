import { action, observable } from "mobx";

export default class ConfigStore {
  @observable
  public open: boolean;
  @observable
  public renderMarkdown: boolean;

  constructor() {
    let saved = {} as this;
    if (localStorage.mastodon_extend_config) {
      saved = JSON.parse(localStorage.mastodon_extend_config);
    }

    this.open = saved.open || false;
    this.renderMarkdown = saved.renderMarkdown || false;
  }

  private save() {
    localStorage.mastodon_extend_config = JSON.stringify({...this, open: undefined});
  }

  @action
  public show() {
    this.open = true;
    document.body.style.setProperty("overflow", "hidden", "important");
  }

  @action
  public hide() {
    this.open = false;
    document.body.style.removeProperty("overflow");
  }

  @action
  public setRenderMarkdown(enable: boolean) {
    this.renderMarkdown = enable;
    this.save();
  }
}
