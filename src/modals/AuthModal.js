import { useState } from 'react';
import { Animated, Modal, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { PropTypes } from 'prop-types';
import LoginContent from './LoginContent';
import SingUpModal from './SingUpContent';
import { authContent } from '../values/AuthValue';
import EmialVerfied from './EmailVerified';

const AuthModal = ({ showAuthModal, hideModal, slideAnim, modalContent }) => {
  return (
    <Modal
      animationType="fade"
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
          {modalContent === authContent.LOGIN_CONTENT ? (
            <LoginContent hideModal={hideModal} />
          ) : (
            modalContent === authContent.SIGNUP_CONTENT && (
              <SingUpModal hideModal={hideModal} />
            )
          )}
        </Animated.View>
        <TouchableOpacity
          style={{ flex: 1, position: 'absolute' }}
          activeOpacity={1}
          onPress={() => {
            hideModal();
          }}
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
