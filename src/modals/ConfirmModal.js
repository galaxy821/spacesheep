import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PropTypes } from 'prop-types';
import styled from 'styled-components/native';
import SpaceBox from '../components/common/SpaceBox';
import { AuthButton } from '../components/auth/AuthButton';
import { lightThemeColor } from '../styles/Color';

const ConfirmModal = ({ isOpen, onClose, contentText }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => {
        onClose();
      }}
    >
      <ModalLayout>
        <View style={confirmStyles.container}>
          <SpaceBox height={10} />
          <Text style={confirmStyles.text}>{contentText}</Text>
          <SpaceBox height={30} />
          <AuthButton
            title="확인"
            width={240}
            height={48}
            color={lightThemeColor.primary}
            onPress={onClose}
          />
        </View>
      </ModalLayout>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  contentText: PropTypes.string,
};

export default ConfirmModal;

const ModalLayout = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const confirmStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 320,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 16,
  },
});
