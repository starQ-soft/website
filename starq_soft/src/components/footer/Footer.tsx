"use client";
import React from "react";
import { useAppSelector } from "../../app/hooks"
import { selectedLanguage } from "../../components/language_selector/languageSelectorSlice"
import styled from "styled-components";
import { FooterLocalizationConstants, socialLinks } from "./FooterConstants";

const FooterWrapper = styled.footer`
  padding: 4rem 0;
  margin-top: auto;
  opacity: 0.9;
  background: repeating-linear-gradient(
    -45deg, 
    #ffefb7, 
    #ffefb7 15px, 
    #ffe09f 15px, 
    #ffe09f 35px
  );

  @media (max-width: 640px) {
    padding: 40px 15px 15px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.h4`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled.a`
  color: #999;
  text-decoration: none;
  font-size: 1rem;;
  transition: color 0.3s ease;

  &:hover {
    color: #EDC211;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  margin-top: 16px;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: #999;
  font-size: 24px;
  text-decoration: none;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(80, 80, 80, 0.8);

  &:hover {
    transform: translateY(-3px);
    color: #fff;
    background: linear-gradient(135deg, rgba(233,210,136,1) 0%, rgba(202,180,81,1) 35%, rgba(193,149,59,1) 100%);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #EDC211;
  }
`;

const SocialIcon = styled.i`
  transition: transform 0.2s ease;

  ${SocialLink}:hover & {
    transform: scale(1.1);
  }
`;

const Copyright = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 40px;
  padding-top: 20px;
  text-align: center;
`;

const CopyrightText = styled.p`
  color: #937b2c;
  margin: 0;
  font-size: 1rem;;
`;

export const Footer: React.FC<any> = () => {
  const selectedLang = useAppSelector(selectedLanguage);
  const t = FooterLocalizationConstants[selectedLang] || FooterLocalizationConstants['en-us'];
  const footerSections = [
    {
      title: t.company,
      links: [
        { text: t.aboutUs, href: '/about' },
        { text: t.contactUs, href: '/contact' },
      ],
    },
    {
      title: t.support,
      links: [
        { text: t.helpCenter, href: '/help' },
        { text: t.faq, href: '/faq' },
        { text: t.siteMap, href: '/map' },
      ],
    },
    {
      title: t.legal,
      links: [
        { text: t.termsOfService, href: '/terms' },
        { text: t.privacyPolicy, href: '/privacy' },
      ],
    },
  ];

  return (
    <FooterWrapper>
      <Container>
        <Grid>
          {footerSections.map((section, index) => (
            <Column key={index}>
              <ColumnTitle>{section.title}</ColumnTitle>
              <LinkList>
                {section.links.map((link, idx) => (
                  <FooterLink key={idx} href={link.href}>{link.text}</FooterLink>
                ))}
              </LinkList>
            </Column>
          ))}

          <Column>
            <ColumnTitle>{t.followUs}</ColumnTitle>
            <SocialLinks>
              {socialLinks.map((social, index) => (
                <SocialLink key={index} href={social.href} target="_blank" aria-label={social.label}>
                  {social.icon}
                </SocialLink>
              ))}
            </SocialLinks>
          </Column>
        </Grid>

        <Copyright>
          <CopyrightText>{t.copyright}</CopyrightText>
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer
