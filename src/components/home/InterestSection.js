import { StyleSheet, Text, View } from 'react-native';
import InterestButton from './InterestButton';
import { INTEREST_DUMMY_DATA } from '../../test/dummy/InterestData';
import { KODDI_FONT_BOLD } from '../../assets/fonts/KoddiUOnGothic';

const INTEREST_SECTION_TEXT = '관심사를 골라보세요';

/**
 * 관심사 선택 섹션
 * @returns {JSX.Element} 관심사 선택 섹션 컴포넌트
 */
const InterestSection = () => {
  return (
    <View style={InterestSectionStyle.container}>
      <Text style={InterestSectionStyle.title}>{INTEREST_SECTION_TEXT}</Text>
      <View style={InterestSectionStyle.content}>
        {INTEREST_DUMMY_DATA.map((interest, index) => (
          <InterestButton key={index} title={interest} />
        ))}
      </View>
    </View>
  );
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
