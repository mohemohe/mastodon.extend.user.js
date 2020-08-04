import React from "react";
import { inject, observer } from "mobx-react";
import ConfigStore from "../stores/ConfigStore";

export interface Props {
  ConfigStore?: ConfigStore;
}

const styles = {
  root: {
    position: "fixed" as any,
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(5px)",
    zIndex: 100001,
  },
  container: {
    marginLeft: 10,
    width: "fit-content",
  },
  button: {
    height: "100%",
    fontSize: 18,
    alignItems: "center",
  },
};

@inject("ConfigStore")
@observer
export default class Config extends React.Component<Props> {
  private onClickButton() {
    console.log(this.props);
    this.props.ConfigStore?.hide();
  }

  public render() {
    return (
      <div style={styles.root}>
        <h1>
          設定
        </h1>
        <form>
            <label>
              <input
                type="checkbox"
                checked={this.props.ConfigStore?.renderMarkdown}
                onClick={() => this.props.ConfigStore?.setRenderMarkdown(!this.props.ConfigStore?.renderMarkdown)}
              />
              Markdownのレンダリングを有効にする (Experimental)
            </label>
        </form>
        <button onClick={() => this.onClickButton()}>OK</button>
      </div>
    );
  }
}
