import { WUPModalElement } from "web-ui-pack";

import styles from "./alertModal.m.scss";

const alertModal = (message: string) => WUPModalElement.$showConfirm({ question: message, className: styles.alertModal });

export default alertModal;
