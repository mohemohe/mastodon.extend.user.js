import React from "react";
import { inject, observer } from "mobx-react";
import ConfigStore from "../stores/ConfigStore";

export interface Props {
  ConfigStore?: ConfigStore;
}

const styles = {
  button: {
    height: "100%",
    fontSize: 18,
    alignItems: "center",
  },
};

@inject("ConfigStore")
@observer
export default class ConfigButton extends React.Component<Props> {
  private onClickButton() {
    console.log(this.props);
    this.props.ConfigStore?.show();
  }

  public render() {
    return (
      <button
        style={styles.button}
        className={"icon-button inverted"}
        onClick={() => this.onClickButton()}
      >
        <i role={"img"} className={"fa fa-cog fa-fw"} aria-hidden={"true"} />
      </button>
    );
  }
}
