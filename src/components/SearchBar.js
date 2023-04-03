import SearchIcon from './icons/SearchIcon';
import { SearchBarStyle } from '../styles/DefaultStyle';

const SearchBar = () => (
  <SearchBarStyle.View style>
    <SearchBarStyle.TextInput placeholder="Search" />
    <SearchBarStyle.Button>
      <SearchIcon />
    </SearchBarStyle.Button>
  </SearchBarStyle.View>
);

export default SearchBar;
