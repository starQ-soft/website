import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Page = styled.main`
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  padding: clamp(1.5rem, 5vw, 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at 20% 20%, rgba(248, 155, 176, 0.18), transparent 35%),
    radial-gradient(circle at 80% 75%, rgba(183, 163, 243, 0.16), transparent 35%),
    #fffafc;
  color: #5f4d52;
  box-sizing: border-box;
`;

const Content = styled.div`
  width: min(100%, 68rem);
  display: grid;
  grid-template-columns: minmax(16rem, 1fr) minmax(18rem, 0.8fr);
  align-items: center;
  gap: clamp(1.5rem, 5vw, 5rem);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }
`;

const Illustration = styled.img`
  display: block;
  width: 100%;
  max-width: 34rem;
  max-height: 78vh;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;

  @media (max-width: 768px) {
    width: min(78vw, 23rem);
    max-height: 58vh;
  }
`;

const Message = styled.section`
  font-family: "YuMincho", "Hiragino Mincho ProN", "Songti SC", serif;

  h1 {
    margin: 0 0 1rem;
    color: #cc1075;
    font-size: clamp(2rem, 6vw, 4.5rem);
    line-height: 1.1;
  }

  p {
    margin: 0 0 2rem;
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.8;
  }
`;

const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.75rem 2rem;
  border: 2px solid #cc1075;
  border-radius: 999px;
  background: #cc1075;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;

  &:hover,
  &:focus-visible {
    background: #fff;
    color: #cc1075;
    transform: translateY(-2px);
  }
`;

const NotFound = () => (
  <Page>
    <Content>
      <Illustration
        src={`${import.meta.env.BASE_URL}404.png`}
        alt="404 page not found"
        draggable={false}
      />
      <Message>
        <h1>Page not found</h1>
        <p>The page you are looking for may have moved or no longer exists.</p>
        <HomeLink to="/">Back to home</HomeLink>
      </Message>
    </Content>
  </Page>
);

export default NotFound;
