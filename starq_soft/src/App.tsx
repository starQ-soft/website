import React, { useState } from 'react';
import translations from './translations.json';
import news from './news.json';
import logoImage from './assets/StarQ_logo.png';
import steamLogo from './assets/steam-logo.svg';
import { GlobalStyle, Nav, Logo, NavLinks, DropdownContainer, DropdownButton, DropdownMenu, DropdownItem, NavActions, GlobalContainer, Hero, HeroContent, EventInfoRow, Badge, HeroDate, ButtonGroup, PrimaryButton, PreorderText, SecondaryButton, Main, SectionHeader, SubHeader, NewsRow, TypeBadge, NewsDate, ProductHeaderArea, SmallButton, ProductGrid, ProductBanner, Footer, FooterContent, AboutBox, FooterLinks, SteamIcon, CheckboxContainer, FormContainer, Input, Row, SubmitButton, Subtitle, Textarea, Title, SocialLinks, SocialLink, ScrollableContainer, FooterTop, Copyright } from './styles';
import BackToTop from './components/BackToTop';
import { socialLinks } from './components/footer/FooterConstants';
import FallingStars from './components/FallingStars';

const App = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ja-jp');

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
    code: 'ja-jp' | 'en-us' | 'zh-cn';
  }

  const handleLanguageChange = (langCode: LanguageCode['code']): void => {
    setCurrentLang(langCode);
    setLangOpen(false);
  };

  return (
    <>
      <FallingStars />
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
                <DropdownItem onClick={() => handleLanguageChange('ja-jp')}>日本語</DropdownItem>
                <DropdownItem onClick={() => handleLanguageChange('en-us')}>English</DropdownItem>
                <DropdownItem onClick={() => handleLanguageChange('zh-cn')}>简体中文</DropdownItem>
              </DropdownMenu>
            )}
          </DropdownContainer>
        </NavActions>
      </Nav>
      <header>
        <Hero $bgImage="public/banner.png">
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
        <Main><ScrollableContainer>
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
                <span>
                  {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <strong>{item.text}</strong>
                  </a> : <strong>{item.text}</strong>}
                  <NewsDate>{item.date}</NewsDate>
                </span>
              </NewsRow>
            ))}
          </section>
        </ScrollableContainer>

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
                <a href={banner.link} key={index} style={{ textDecoration: 'none' }}>
                  <ProductBanner key={index} $bgImage={banner.image} $upcoming={banner.upcoming} >
                    {banner.name}
                  </ProductBanner>
                </a>
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
        <FooterTop />
        <FooterContent>
          {/* <FooterLinks>
            {t.footer.links.map((link, index) => (
              <a href="#" key={index}>{link}</a>
            ))}
          </FooterLinks> */}
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
      <BackToTop />
    </>
  );
};

export default App;