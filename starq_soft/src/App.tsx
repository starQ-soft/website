import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import translations from './translations.json';
import news from './news.json';
import logoImage from './assets/StarQ_logo.png';
import steamLogo from './assets/steam-logo.svg';
import { GlobalStyle, Nav, Logo, NavLinks, DropdownContainer, DropdownButton, DropdownMenu, DropdownItem, NavActions, GlobalContainer, Hero, HeroContent, EventInfoRow, Badge, HeroDate, ButtonGroup, PrimaryButton, PreorderText, SecondaryButton, Main, SectionHeader, SubHeader, NewsRow, TypeBadge, NewsDate, ProductHeaderArea, SmallButton, ProductGrid, ProductBanner, ProductBannerLink, Footer, FooterContent, AboutBox, FooterLinks, SteamIcon, CheckboxContainer, FormContainer, Input, Row, SubmitButton, Subtitle, Textarea, Title, SocialLinks, SocialLink, ScrollableContainer, FooterTop, Copyright, LangButtonContent, StatusMessage } from './styles';
import BackToTop from './components/BackToTop';
import { socialLinks } from './components/footer/FooterConstants';
import FallingStars from './components/FallingStars';
import type { LanguageCode } from './Language';

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
              <LangButtonContent>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M9.5,17c0.6,3.1,1.7,5,2.5,5s1.9-1.9,2.5-5H9.5z M16.6,17c-0.3,1.7-0.8,3.3-1.4,4.5c2.3-0.8,4.3-2.4,5.5-4.5H16.6z M3.3,17c1.2,2.1,3.2,3.7,5.5,4.5c-0.6-1.2-1.1-2.8-1.4-4.5H3.3z M16.9,15h4.7c0.2-0.9,0.4-2,0.4-3s-0.2-2.1-0.5-3h-4.7c0.2,1,0.2,2,0.2,3S17,14,16.9,15z M9.2,15h5.7c0.1-0.9,0.2-1.9,0.2-3S15,9.9,14.9,9H9.2C9.1,9.9,9,10.9,9,12C9,13.1,9.1,14.1,9.2,15z M2.5,15h4.7c-0.1-1-0.1-2-0.1-3s0-2,0.1-3H2.5C2.2,9.9,2,11,2,12S2.2,14.1,2.5,15z M16.6,7h4.1c-1.2-2.1-3.2-3.7-5.5-4.5C15.8,3.7,16.3,5.3,16.6,7z M9.5,7h5.1c-0.6-3.1-1.7-5-2.5-5C11.3,2,10.1,3.9,9.5,7z M3.3,7h4.1c0.3-1.7,0.8-3.3,1.4-4.5C6.5,3.3,4.6,4.9,3.3,7z" />
                </svg>
                {t.nav.language}
              </LangButtonContent>
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
        <Main>
          <ScrollableContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
            >
              <section>
                <ProductHeaderArea>
                  <SectionHeader>
                    {/* <Highlight>{t.news.titleHighlight}</Highlight>{t.news.titleRest} */}
                    {n.subTitle}
                  </SectionHeader>
                </ProductHeaderArea>

                {n.items.map((item, index) => (
                  <NewsRow key={index}>
                    <TypeBadge $bgColor={item.type !== 'UPDATE' ? '#d83c6b' : '#f2c45e'}>
                      {item.type}
                    </TypeBadge>
                    <span>
                      {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <strong>{item.text}</strong>
                      </a> : <strong>{item.text}</strong>}
                    </span>
                    <NewsDate>{item.date}</NewsDate>
                  </NewsRow>
                ))}
              </section>
            </motion.div>
          </ScrollableContainer>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <ProductHeaderArea>
                <SectionHeader>
                  {/* <Highlight>{t.product.titleHighlight}</Highlight>{t.product.titleRest} */}
                  {t.product.subTitle}
                </SectionHeader>
                {/* <SmallButton>{t.product.btn}</SmallButton> */}
              </ProductHeaderArea>

              <ProductGrid>
                {t.product.banners.map((banner, index) => (
                  <ProductBannerLink href={banner.link} key={index}>
                    <ProductBanner key={index} $bgImage={banner.image} $upcoming={banner.upcoming} >
                      {banner.name}
                    </ProductBanner>
                  </ProductBannerLink>
                ))}
              </ProductGrid>
            </motion.div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
              viewport={{ once: true }}
            >
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
                {status && <StatusMessage>{status}</StatusMessage>}
              </FormContainer>
            </motion.div>
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