import React, { useState } from 'react';
import translations from './translations.json';
import news from './news.json';
import logoImage from './assets/StarQ_logo.png';
import steamLogo from './assets/steam-logo.svg';
import { GlobalStyle, Nav, Logo, NavLinks, DropdownContainer, DropdownButton, DropdownMenu, DropdownItem, NavActions, GlobalContainer, Hero, HeroContent, EventInfoRow, Badge, HeroDate, ButtonGroup, PrimaryButton, PreorderText, SecondaryButton, Main, SectionHeader, SubHeader, NewsRow, TypeBadge, NewsDate, ProductHeaderArea, SmallButton, ProductGrid, ProductBanner, Footer, FooterContent, AboutBox, FooterLinks, SteamIcon, CheckboxContainer, FormContainer, Input, Row, SubmitButton, Subtitle, Textarea, Title } from './styles';
import BackToTop from './components/BackToTop';
import AppRouter from './router';

const App = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ja');

  // Helper variable to access the current language data cleanly
  const t = translations[currentLang as keyof typeof translations];
  const n = news[currentLang as keyof typeof news];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      // 调用后端 API 转发邮件，隐藏邮箱
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          company: "",
          collaborationType: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error submitting form. Please try again.");
    }
  };

  interface LanguageCode {
    code: 'ja' | 'en' | 'zh';
  }

  const handleLanguageChange = (langCode: LanguageCode['code']): void => {
    setCurrentLang(langCode);
    setLangOpen(false);
  };

  return (
    <>
      {/* <AppRouter /> */}
      <GlobalStyle />
      <Nav>
        <Logo src={logoImage} alt="StarQ Logo" />

        <NavLinks>
          <a href="#">{t.nav.products}</a>
          <a href="#">{t.nav.shop}</a>
          <a href="#">{t.nav.support}</a>
          <a href="#">{t.nav.blog}</a>
          <a href="#">{t.nav.events}</a>
        </NavLinks>

        <NavActions>
          <DropdownContainer>
            <DropdownButton onClick={() => setLangOpen(!langOpen)}>
              {t.nav.language}
            </DropdownButton>
            {langOpen && (
              <DropdownMenu>
                <DropdownItem onClick={() => handleLanguageChange('ja')}>日本語</DropdownItem>
                <DropdownItem onClick={() => handleLanguageChange('en')}>English</DropdownItem>
                <DropdownItem onClick={() => handleLanguageChange('zh')}>中文</DropdownItem>
              </DropdownMenu>
            )}
          </DropdownContainer>
        </NavActions>
      </Nav>

      <header>
        <Hero>
          <HeroContent>
            {/* <EventInfoRow>
              <Badge>{t.hero.dateLabel}</Badge>
              <HeroDate>{t.hero.dateValue}</HeroDate>
            </EventInfoRow> */}

            <ButtonGroup>
              <PreorderText>{t.hero.preorder}</PreorderText>
              <PrimaryButton><SteamIcon src={steamLogo} />{t.hero.btnPrimary}</PrimaryButton>
            </ButtonGroup>
          </HeroContent>
        </Hero>
      </header>


      <GlobalContainer>
        <Main>
          <section>
            <ProductHeaderArea>
              <SectionHeader>
                {/* <Highlight>{t.news.titleHighlight}</Highlight>{t.news.titleRest} */}
                {n.subTitle}
              </SectionHeader>
            </ProductHeaderArea>

            {n.items.map((item, index) => (
              <NewsRow key={index}>
                <TypeBadge style={{ backgroundColor: item.type !== 'UPDATE' ? '#d83c6b' : '#f2c45e' }}>
                  {item.type}
                </TypeBadge>
                <a href="#"><strong>{item.text}</strong></a>
                <NewsDate>{item.date}</NewsDate>
              </NewsRow>
            ))}
          </section>

          <section>
            <ProductHeaderArea>
              <SectionHeader>
                {/* <Highlight>{t.product.titleHighlight}</Highlight>{t.product.titleRest} */}
                {t.product.subTitle}
              </SectionHeader>
              {/* <SmallButton>{t.product.btn}</SmallButton> */}
            </ProductHeaderArea>

            <ProductGrid>
              {t.product.banners.map((banner, index) => (
                <ProductBanner key={index} $bgImage={banner.image} $upcoming={banner.upcoming}>
                  {banner.name}
                </ProductBanner>
              ))}
            </ProductGrid>
          </section>

          <section>
            <AboutBox>
              <SectionHeader>
                {t.about.aboutTitle}</SectionHeader>
              <p>{t.about.aboutText}</p>
            </AboutBox>

            <AboutBox>
              <SectionHeader>
                {t.contact.contactTitle} </SectionHeader>
              <p>{t.contact.contactText}</p>

            </AboutBox>
            <FormContainer onSubmit={handleSubmit}>
              <Title>{t.contact.title}</Title>
              <Subtitle>{t.contact.subtitle}</Subtitle>

              <Row>
                <Input
                  type="text"
                  name="Name"
                  placeholder={t.contact.name}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <Input
                  type="email"
                  name="email"
                  placeholder={t.contact.email}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Row>

              <Textarea
                name="message"
                placeholder={t.contact.message}
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />

              <CheckboxContainer>
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
                {t.contact.agreePrefix} <a href="/terms">{t.contact.terms}</a> {t.contact.and}{" "}
                <a href="/privacy">{t.contact.privacy}</a>.
              </CheckboxContainer>

              <SubmitButton type="submit">{t.contact.submit}</SubmitButton>
              {status && <p style={{ marginTop: "12px", fontSize: "14px" }}>{status}</p>}
            </FormContainer>
          </section>
        </Main>
      </GlobalContainer>

      <Footer>
        <FooterContent>
          <FooterLinks>
            {t.footer.links.map((link, index) => (
              <a href="#" key={index}>{link}</a>
            ))}
          </FooterLinks>

          <div style={{ fontSize: '0.75rem', color: '#374151', fontWeight: 500 }}>
            {t.footer.copyright}
          </div>
        </FooterContent>
      </Footer>
      <BackToTop />
    </>
  );
};

export default App;