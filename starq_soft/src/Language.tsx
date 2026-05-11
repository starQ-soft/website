"use client";
import React from "react";
import { useAppSelector } from "../../app/hooks"
import { selectedLanguage } from "../../components/language_selector/languageSelectorSlice"
import styled from "styled-components";
import { LangLocalizationConstants, socialLinks } from "./LangConstants";

export type LanguageCode = 'ja-jp' | 'en-us' | 'zh-cn';

export const Lang: React.FC<any> = () => {
  const selectedLang = useAppSelector(selectedLanguage);
  const t = LangLocalizationConstants[selectedLang] || LangLocalizationConstants['en-us'];
  const langSections = [
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
    <LangWrapper>
      <Container>
        <Grid>
          {langSections.map((section, index) => (
            <Column key={index}>
              <ColumnTitle>{section.title}</ColumnTitle>
              <LinkList>
                {section.links.map((link, idx) => (
                  <LangLink key={idx} href={link.href}>{link.text}</LangLink>
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
    </LangWrapper>
  );
};

export default Lang
