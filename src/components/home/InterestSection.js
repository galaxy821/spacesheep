import { StyleSheet, Text, View } from 'react-native';
import InterestButton from './InterestButton';
import { KODDI_FONT_BOLD } from '../../assets/fonts/KoddiUOnGothic';
import dummyData from '../../../assets/dummy/home/interest_subject_dummy.json';
import { PropTypes } from 'prop-types';

const INTEREST_SECTION_TEXT = '관심사를 골라보세요';

/**
 * 관심사 선택 섹션
 * @component
 * @param {object} props
 * @param {string} currentInterest 현재 선택된 관심사
 * @param {function} setCurrentInterest 현재 선택된 관심사 변경 함수
 * @param {object} subject 홈 화면 관심 주제 리스트
 * @returns {JSX.Element} 관심사 선택 섹션 컴포넌트
 */
const InterestSection = ({ currentInterest, setCurrentInterest, subject }) => {
  return (
    <View style={InterestSectionStyle.container}>
      <Text style={InterestSectionStyle.title}>{INTEREST_SECTION_TEXT}</Text>
      <View style={InterestSectionStyle.content}>
        {dummyData.map(
          // subject
          (interest, index) => (
            <InterestButton
              key={index}
              title={interest.name}
              setCurrentInterest={setCurrentInterest}
              currentInterest={currentInterest}
            />
          )
        )}
      </View>
    </View>
  );
};

InterestSection.propTypes = {
  currentInterest: PropTypes.string,
  setCurrentInterest: PropTypes.func,
  subject: PropTypes.array,
};

export default InterestSection;

const InterestSectionStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: KODDI_FONT_BOLD,
  },
  content: {
    flexDirection: 'row',
    paddingVertical: 10,
    flexWrap: 'wrap',
  },
});
