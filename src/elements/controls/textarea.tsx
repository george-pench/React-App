import classNames from "classnames";
import { WUPTextareaControl } from "web-ui-pack";
import BaseControl, { BaseControlProps } from "./baseControl";
import styles from "./controls.m.scss";

WUPTextareaControl.$use();

interface Props extends BaseControlProps<string, WUPTextareaControl, WUP.Textarea.Options> {}

export default class TextareaControl extends BaseControl<WUPTextareaControl, Props> {
  goRender(props: Record<string, unknown>): JSX.Element {
    return <wup-textarea {...props} class={classNames(styles.ctrl, this.props.className)} />;
  }
}
