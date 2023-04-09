import { Animated, Modal, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { PropTypes } from 'prop-types';
import LoginContent from './LoginContent';
import SingUpContent from './SingUpContent';
import { LOGIN_CONTENT, SIGNUP_CONTENT } from '../values/AuthValue';
import SignUpScreen from '../screens/auth/SignUpScreen';

const AuthModal = ({
  showAuthModal,
  hideModal,
  fadeAnim,
  slideAnim,
  modalContent,
}) => {
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
          {modalContent === LOGIN_CONTENT ? (
            <LoginContent hideModal={hideModal} />
          ) : (
            SingUpContent === SIGNUP_CONTENT && (
              <SignUpScreen hideModal={hideModal} />
            )
          )}
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

AuthModal.propTypes = {
  showAuthModal: PropTypes.bool,
  setShowAuthModal: PropTypes.func,
  hideModal: PropTypes.func,
  fadeAnim: PropTypes.object,
  slideAnim: PropTypes.object,
  modalContent: PropTypes.string,
};

export default AuthModal;
