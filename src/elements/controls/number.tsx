import classNames from "classnames";
import { WUPNumberControl } from "web-ui-pack";
import BaseControl, { BaseControlProps } from "./baseControl";
import styles from "./controls.m.scss";

WUPNumberControl.$use();

interface Props extends BaseControlProps<number, WUPNumberControl, WUP.Number.Options> {}

export default class NumberControl extends BaseControl<WUPNumberControl, Props> {
  goRender(props: Record<string, unknown>): JSX.Element {
    return <wup-num {...props} class={classNames(styles.ctrl, this.props.className)} />;
  }
}
