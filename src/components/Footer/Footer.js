import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background: linear-gradient(35deg, #ffef00 50%, #000 50%);
  display: flex;
  
`;

const FooterLinkSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  color:  #ffef00;
`;

const FooterInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const InformationHeading = styled.h2`
font-size: 1.4rem;
color: inherit;
`
const AuthorsHeading = styled.h2`
font-size: 1.4rem;
color: inherit;
align-self: flex-end;
`

const FooterList = styled.ul`
  list-style: none;
  align-self: center;
`;

const FooterListElement = styled.li`
font-size: 1.2rem;
`

const FooterLink = styled.a`
color: inherit;
text-decoration: none;
  &:active,
  &:visited {
    text-decoration: none;
  }
  
`;

const Footer = () =>
  <FooterWrapper>
    <FooterInfoSection>
      <FooterList>
        <FooterListElement>
          <FooterLink href="#">
            1
          </FooterLink>
        </FooterListElement>
        <FooterListElement>
          <FooterLink href="#">
            2
          </FooterLink>
        </FooterListElement>
        <FooterListElement>
          <FooterLink href="#">
            3
          </FooterLink>
        </FooterListElement>
        <FooterListElement>
          <FooterLink href="#">
            4
          </FooterLink>
        </FooterListElement>
      </FooterList>
      <AuthorsHeading>Autorzy</AuthorsHeading>
    </FooterInfoSection>
    <FooterLinkSection>
      <InformationHeading>Informacje</InformationHeading>
      <FooterList>
        <FooterListElement>
          <FooterLink href="#">
            5
          </FooterLink>
        </FooterListElement>
        <FooterListElement>
          <FooterLink href="#">
            6
          </FooterLink>
        </FooterListElement>
        <FooterListElement>
          <FooterLink href="#">
            7
          </FooterLink>
        </FooterListElement>
        <FooterListElement>
          <FooterLink href="#">
            8
          </FooterLink>
        </FooterListElement>
      </FooterList>
    </FooterLinkSection>
  </FooterWrapper>

export default Footer;