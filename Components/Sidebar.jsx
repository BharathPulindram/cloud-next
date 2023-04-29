import { Avatar } from "@mui/material";
import styled from "styled-components";

function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />
      </Header>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)``;
