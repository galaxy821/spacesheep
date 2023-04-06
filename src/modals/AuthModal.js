import { Animated, Modal, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { PropTypes } from 'prop-types';
import LoginContent from './LoginContent';

const AuthModal = ({ showAuthModal, hideModal, fadeAnim, slideAnim }) => {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={showAuthModal}
      onRequestClose={() => {
        hideModal();
      }}
    >
      <BlurView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
        intensity={30}
      >
        <Animated.View
          style={{
            transform: [{ translateY: slideAnim }],
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LoginContent hideModal={hideModal} />
        </Animated.View>
        <TouchableOpacity
          style={{ flex: 1, position: 'absolute' }}
          activeOpacity={1}
          onPress={hideModal}
        />
      </BlurView>
    </Modal>
  );
};

AuthModal.propsTypes = {
  showAuthModal: PropTypes.bool.isRequired,
  setShowAuthModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  fadeAnim: PropTypes.object.isRequired,
  slideAnim: PropTypes.object.isRequired,
};

export default AuthModal;
