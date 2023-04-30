import { Avatar } from "@mui/material";
import styled from "styled-components";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";

function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>
      <Search>
        <SearchOutlinedIcon />
        <SearchInput placeholder="search items" />
      </Search>
      <SidebarButton>New Chat</SidebarButton>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 3px;
`;
const SearchInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
`;

const SidebarButton = styled(Button)`
  width: 100%;
  color: black;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
