import InterestButton from './InterestButton';
import { INTEREST_DUMMY_DATA } from '../../test/dummy/InterestData';
import { INTEREST_SECTION_TEXT } from '../../values/HomeValue';
import { InterestSectionStyle } from '../../styles/HomeStyle';

const InterestSection = () => {
  return (
    <InterestSectionStyle.View>
      <InterestSectionStyle.Text>
        {INTEREST_SECTION_TEXT}
      </InterestSectionStyle.Text>
      <InterestSectionStyle.ContentView>
        {INTEREST_DUMMY_DATA.map((interest, index) => (
          <InterestButton key={index} title={interest} />
        ))}
      </InterestSectionStyle.ContentView>
    </InterestSectionStyle.View>
  );
};

export default InterestSection;
