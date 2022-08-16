import {Input} from 'antd';
const Search =  Input.Search;
const SearchBar  = ({width, onSearch}) => {
    return(
        <Search
          width={width}
          placeholder="Search"
          onChange={onSearch} style={{ width: 200 }}
         />
    )
}
export default SearchBar