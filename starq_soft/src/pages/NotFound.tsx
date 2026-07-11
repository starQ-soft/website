import { Link } from 'react-router-dom';
import styled from 'styled-components';
import translations from '../translations.json';
import logoImage from '../assets/StarQ_logo.png';
import { Copyright, Footer, FooterContent, FooterTop, Logo, Nav, NavActions, SocialLink, SocialLinks } from '../styles';
import { socialLinks } from '../components/footer/FooterConstants';
import LangSelector from '../LangSelector';
import { useLanguage, type LanguageCode } from '../LanguageContext';

const notFoundTranslations: Record<LanguageCode, { title: string; description: string; home: string; imageAlt: string }> = {
  'ja-jp': { title: 'ページが見つかりません', description: 'お探しのページは移動または削除された可能性があります。', home: 'ホームに戻る', imageAlt: '404 ページが見つかりません' },
  'en-us': { title: 'Page not found', description: 'The page you are looking for may have moved or no longer exists.', home: 'Back to home', imageAlt: '404 page not found' },
  'zh-cn': { title: '页面未找到', description: '您访问的页面可能已被移动或已不存在。', home: '返回首页', imageAlt: '404 页面未找到' },
  'zh-tw': { title: '找不到頁面', description: '您要尋找的頁面可能已移動或已不存在。', home: '返回首頁', imageAlt: '404 找不到頁面' },
  'ko-kr': { title: '페이지를 찾을 수 없습니다', description: '요청하신 페이지가 이동되었거나 더 이상 존재하지 않을 수 있습니다.', home: '홈으로 돌아가기', imageAlt: '404 페이지를 찾을 수 없음' },
  'es-es': { title: 'Página no encontrada', description: 'Es posible que la página que buscas se haya movido o ya no exista.', home: 'Volver al inicio', imageAlt: 'Página 404 no encontrada' },
  'ru-ru': { title: 'Страница не найдена', description: 'Возможно, запрашиваемая страница была перемещена или больше не существует.', home: 'Вернуться на главную', imageAlt: 'Страница 404 не найдена' },
  'vi-vn': { title: 'Không tìm thấy trang', description: 'Trang bạn đang tìm có thể đã được chuyển hoặc không còn tồn tại.', home: 'Về trang chủ', imageAlt: 'Không tìm thấy trang 404' },
  'fr-fr': { title: 'Page introuvable', description: 'La page que vous recherchez a peut-être été déplacée ou n’existe plus.', home: 'Retour à l’accueil', imageAlt: 'Page 404 introuvable' },
  'it-it': { title: 'Pagina non trovata', description: 'La pagina che cerchi potrebbe essere stata spostata o non esistere più.', home: 'Torna alla home', imageAlt: 'Pagina 404 non trovata' },
  'de-de': { title: 'Seite nicht gefunden', description: 'Die gesuchte Seite wurde möglicherweise verschoben oder existiert nicht mehr.', home: 'Zur Startseite', imageAlt: '404 Seite nicht gefunden' },
  'th-th': { title: 'ไม่พบหน้านี้', description: 'หน้าที่คุณกำลังค้นหาอาจถูกย้ายหรือไม่มีอยู่อีกต่อไป', home: 'กลับสู่หน้าหลัก', imageAlt: 'ไม่พบหน้า 404' },
  'ms-my': { title: 'Halaman tidak ditemui', description: 'Halaman yang anda cari mungkin telah dipindahkan atau tidak lagi wujud.', home: 'Kembali ke laman utama', imageAlt: 'Halaman 404 tidak ditemui' },
};

const Page = styled.main`
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  color: #5f4d52;
  box-sizing: border-box;

  & > nav {
    width: 100%;
  }
`;

const Content = styled.div`
  width: 60%;
  flex: 1;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(16rem, 1fr) minmax(18rem, 0.8fr);
  align-items: center;
  justify-items: center;
  gap: clamp(1.5rem, 5vw, 5rem);

  @media (max-width: 768px) {
    width: 90%;
    grid-template-columns: 1fr;
    text-align: center;
    margin: 5rem auto;
  }
`;

const Illustration = styled.img`
  display: block;
  width: 100%;
  max-width: 20rem;
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

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
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

  @media (max-width: 768px) {
    min-height: 1.5rem;
    padding: 0.5rem 1.5rem;
  }
`;

const NotFound = () => {
  const { lang } = useLanguage();
  const t = translations[lang as keyof typeof translations];
  const notFound = notFoundTranslations[lang];
  return (
    <Page>
      <Nav>
        <Link to="/" aria-label={notFound.home}>
          <Logo src={logoImage} alt="StarQ Logo" />
        </Link>
    
            {/* <NavLinks>
              <a href="#">{t.nav.products}</a>
              <a href="#">{t.nav.shop}</a>
              <a href="#">{t.nav.support}</a>
              <a href="#">{t.nav.blog}</a>
              <a href="#">{t.nav.events}</a>
            </NavLinks> */}
    
        <NavActions>
          <LangSelector />
        </NavActions>
      </Nav>
      <Content>
        <Message>
          <h1>{notFound.title}</h1>
          <p>{notFound.description}</p>
          <HomeLink to="/">{notFound.home}</HomeLink>
        </Message>
        <Illustration
          src={`${import.meta.env.BASE_URL}404.png`}
          alt={notFound.imageAlt}
          draggable={false}
        />
      </Content>
    <Footer>
      <FooterTop />
      <FooterContent>
        {/* <FooterLinks>
                {t.footer.links.map((link, index) => (
                  <a href="#" key={index}>{link}</a>
                ))}
              </FooterLinks> */}
        <p>{t.footer.followUs}</p>
        <SocialLinks>
          {socialLinks.map((social, index) => (
            <SocialLink key={index} href={social.href} target="_blank" aria-label={social.label}>
              {social.icon}
            </SocialLink>
          ))}
        </SocialLinks>
        <Copyright >
          {t.footer.copyright}
        </Copyright>
      </FooterContent>
    </Footer>
    </Page>
  );
};

export default NotFound;
