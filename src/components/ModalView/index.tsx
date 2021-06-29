import React, { ReactNode } from "react";

import { View, Modal, ModalProps } from "react-native";
import { styles } from "./style";
import { Background } from "../Background";

type Props = ModalProps & {
  children: ReactNode;
};

export const ModalView = ({ children, ...rest }: Props) => {
  return (
    <Modal {...rest} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
};