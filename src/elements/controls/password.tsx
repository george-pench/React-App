import classNames from "classnames";
import { WUPPasswordControl } from "web-ui-pack";
import BaseControl, { BaseControlProps } from "./baseControl";
import styles from "./controls.m.scss";

WUPPasswordControl.$use();

interface Props extends BaseControlProps<string, WUPPasswordControl, WUP.Password.Options> {
  isStrict?: boolean;
}

const strictValidations: Partial<WUP.Password.ValidityMap> = {
  min: 3,
};

export default class PasswordControl extends BaseControl<WUPPasswordControl, Props> {
  override updateOptions(p: Props, isInit: boolean): void {
    if (p?.isStrict) {
      // eslint-disable-next-line no-param-reassign
      p = { ...p, validations: { ...p.validations, ...strictValidations } };
    }
    super.updateOptions(p, isInit);
  }

  goRender(props: Record<string, unknown>): React.ReactElement {
    return <wup-pwd {...props} class={classNames(styles.ctrl, this.props.className)} />;
  }
}
