import cx from "classnames";
import { WUPFormElement } from "web-ui-pack";
import BaseWUP from "../baseWUP";
import styles from "./form.m.scss";

WUPFormElement.$use();

interface Props extends React.PropsWithChildren<Partial<WUP.Form.Options>> {
  className?: string;
  initModel?: WUPFormElement["$initModel"];
  model?: WUPFormElement["$model"];
  onSubmit?: (model: unknown, ev: WUP.Form.EventMap["$submit"]) => Promise<unknown>;
  onChange?: (model: object, ev: WUP.BaseControl.EventMap["$change"]) => void;
}

export default class Form extends BaseWUP<WUPFormElement, Props> {
  updateOptions(nextProps: Props, isInit: boolean): void {
    super.updateOptions(nextProps, isInit);

    this.domEl.$onSubmit = (e) => {
      nextProps.onSubmit?.call(this.domEl, e.detail.model, e).catch((err) => {
        console.warn(err);
      });
    };
    if (isInit || nextProps.model !== this.props.model) {
      this.domEl.$model = nextProps.model!;
    }
    if (isInit || nextProps.initModel !== this.props.initModel) {
      this.domEl.$initModel = nextProps.initModel;
    }
  }

  componentDidMount(): void {
    super.componentDidMount();
    this.domEl.addEventListener("$change", (ev) => {
      this.props.onChange?.(this.domEl.$model, ev as CustomEvent);
    });
  }

  goRender(props: Record<string, unknown>): JSX.Element {
    return (
      <wup-form {...props} class={cx(styles.form, this.props.className)}>
        {this.props.children}
      </wup-form>
    );
  }
}
