import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import translations from './translations.json';
import news from './news.json';
import logoImage from './assets/StarQ_logo.png';
import steamLogo from './assets/steam-logo.svg';
import { GlobalStyle, Nav, Logo, NavActions, GlobalContainer, Hero, HeroSlides, HeroSlide, HeroDots, HeroDot, HeroContent, ButtonGroup, PrimaryButton, PreorderText, Main, SectionHeader, Twinkle, NewsRow, TypeBadge, NewsDate, ProductHeaderArea, ProductGrid, ProductBanner, ProductBannerLink, Footer, FooterContent, AboutBox, SteamIcon, CheckboxContainer, FormContainer, Input, Row, SubmitButton, Subtitle, Textarea, Title, SocialLinks, SocialLink, ScrollableContainer, FooterTop, Copyright, StatusMessage } from './styles';
import BackToTop from './components/BackToTop';
import { socialLinks } from './components/footer/FooterConstants';
import FallingStars from './components/FallingStars';
import LangSelector from './LangSelector';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';

const MotionHeroSlide = motion.create(HeroSlide);
const MotionProductHeaderArea = motion.create(ProductHeaderArea);
const MotionProductGrid = motion.create(ProductGrid);
const MotionAboutBox = motion.create(AboutBox);
const MotionFaqBox = motion.create(AboutBox);
const MotionSectionHeader = motion.create(SectionHeader);
const MotionFormContainer = motion.create(FormContainer);

// Two-step reveal: the section header animates in first, then the
// remaining content follows via staggerChildren.
const sectionReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.5 },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const heroSlideVariants = {
  enter: (direction: number) => ({ x: `${direction * 100}%` }),
  center: { x: 0 },
  exit: (direction: number) => ({ x: `${direction * -100}%` }),
};

const App = () => {
  const { lang } = useLanguage();
  const t = translations[lang as keyof typeof translations];
  const n = news[lang as keyof typeof news] ?? news['ja-jp'];
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  );

  const banners = [isMobile
    ? `${import.meta.env.BASE_URL}banner4_mobile.png`
    : `${import.meta.env.BASE_URL}banner4.png`,
    // `${import.meta.env.BASE_URL}banner2.png`, `${import.meta.env.BASE_URL}banner3.png`
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateBanner = (event: MediaQueryListEvent) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', updateBanner);
    return () => mediaQuery.removeEventListener('change', updateBanner);
  }, []);

  // direction drives whether slides enter from the right (1) or left (-1).
  const [[bannerIndex, direction], setBanner] = useState([0, 1]);

  const goToBanner = (index: number) => {
    setBanner(([prev]) => [index, index > prev ? 1 : -1]);
  };

  // Auto-advance the hero carousel.
  useEffect(() => {
    const id = setInterval(() => {
      setBanner(([prev]) => [(prev + 1) % banners.length, 1]);
    }, 5000);
    return () => clearInterval(id);
  }, [banners.length]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agree: false,
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const nextValue = e.target instanceof HTMLInputElement && e.target.type === 'checkbox'
      ? e.target.checked
      : value;
    setFormData((prev) => ({ ...prev, [name]: nextValue }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(t.contact.submitting);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus(t.contact.success);
        setFormData({
          name: "",
          email: "",
          message: "",
          agree: false,
        });
      } else {
        setStatus(t.contact.fail);
      }
    } catch (err) {
      console.error(err);
      setStatus(t.contact.error);
    }
  };

  return (
    <>
      <FallingStars />
      <GlobalStyle />
      <Nav>
        <Logo src={logoImage} alt="StarQ Logo" />

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
      <header>
        <Hero>
          <HeroSlides>
            <AnimatePresence initial={false} custom={direction}>
              <MotionHeroSlide
                key={bannerIndex}
                custom={direction}
                $bgImage={banners[bannerIndex]}
                variants={heroSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </AnimatePresence>
            {banners.length > 1 && (
              <HeroDots>
                {banners.map((_, index) => (
                  <HeroDot
                    key={index}
                    $active={index === bannerIndex}
                    onClick={() => goToBanner(index)}
                    aria-label={`${t.hero.goToBanner} ${index + 1}`}
                  />
                ))}
              </HeroDots>
            )}
          </HeroSlides>
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
          <MotionProductHeaderArea variants={itemReveal}>
            <SectionHeader>
              {/* <Highlight>{t.news.titleHighlight}</Highlight>{t.news.titleRest} */}
              {n.subTitle}<Twinkle />
            </SectionHeader>
          </MotionProductHeaderArea>
          <ScrollableContainer>
            <motion.section
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemReveal}>
                {n.items.map((item, index) => (
                  <NewsRow key={index}>
                    <TypeBadge $bgColor={item.type !== 'EVENT' ? '#ed7799' : '#fcd16b'}>
                      {item.type}
                    </TypeBadge>
                    <span>
                      {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.text}
                      </a> : <>{item.text}</>}
                    </span>
                    <NewsDate>{item.date}</NewsDate>
                  </NewsRow>
                ))}
              </motion.div>
            </motion.section>
          </ScrollableContainer>

          <section>
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <MotionProductHeaderArea variants={itemReveal}>
                <SectionHeader>
                  {/* <Highlight>{t.product.titleHighlight}</Highlight>{t.product.titleRest} */}
                  {t.product.subTitle}<Twinkle />
                </SectionHeader>
                {/* <SmallButton>{t.product.btn}</SmallButton> */}
              </MotionProductHeaderArea>

              <MotionProductGrid variants={itemReveal}>
                {t.product.banners.map((banner, index) => (
                  <ProductBannerLink as={Link} to={banner.link} key={index}>
                    <ProductBanner
                      key={index}
                      $bgImage={`${import.meta.env.BASE_URL}${banner.image.replace(/^\/?(?:public\/)?/, '')}`}
                      $upcoming={banner.upcoming}
                    >
                      {banner.name}
                    </ProductBanner>
                  </ProductBannerLink>
                ))}
              </MotionProductGrid>
            </motion.div>
          </section>

          <section>
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <MotionFaqBox variants={sectionReveal}>
                <MotionSectionHeader variants={itemReveal}>
                  {t.faq.faqTitle}<Twinkle /></MotionSectionHeader>
                <motion.p variants={itemReveal}>{t.faq.faqText}</motion.p>
              </MotionFaqBox>
            </motion.div>
          </section>

          <section>
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <MotionAboutBox variants={sectionReveal}>
                <MotionSectionHeader variants={itemReveal}>
                  {t.about.aboutTitle}<Twinkle /></MotionSectionHeader>
                <motion.p variants={itemReveal}>{t.about.aboutText}</motion.p>
              </MotionAboutBox>

              <MotionAboutBox variants={sectionReveal}>
                <MotionSectionHeader variants={itemReveal}>
                  {t.contact.contactTitle} <Twinkle />
                </MotionSectionHeader>
                <motion.p variants={itemReveal}>{t.contact.contactText}</motion.p>
              </MotionAboutBox>

              <MotionFormContainer variants={itemReveal} onSubmit={handleSubmit}>
                <Title>{t.contact.title}</Title>
                <Subtitle>{t.contact.subtitle}</Subtitle>

                <Row>
                  <Input
                    type="text"
                    name="name"
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

                <div style={{ textAlign: "center" }}>
                  <SubmitButton type="submit">{t.contact.submit}</SubmitButton>
                </div>
                {status && <StatusMessage>{status}</StatusMessage>}
              </MotionFormContainer>
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
      <BackToTop />
    </>
  );
};

export default App;
