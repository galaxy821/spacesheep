import { Modal, StyleSheet, Text, View } from 'react-native';
import { PropTypes } from 'prop-types';
import SpaceBox from '../components/common/SpaceBox';
import { AuthButton } from '../components/auth/AuthButton';
import { lightThemeColor } from '../styles/Color';

/**
 * 확인 Modal
 * @param {object} props 컴포넌트 props
 * @param {boolean} isOpen Modal 오픈 여부
 * @param {function} onClose Modal 닫기 함수
 * @param {string} contentText Modal 내용 텍스트
 * @returns {JSX.Element} 확인 Modal 컴포넌트
 */
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
      <View style={confirmStyles.layout}>
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
      </View>
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

const confirmStyles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
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
