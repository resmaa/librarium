import React from 'react';
import Tree from './tree';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import menuBackground from 'assets/menu-background.png';
import Logo from 'components/Logo';

const Sidebar = styled.aside`
  overflow-y: auto;
  height: 100%;
  background: url(${menuBackground}), linear-gradient(127.94deg, #f9f9f9 51.53%, #f5f5f5 72.26%);

  @media only screen and (max-width: 1023px) {
    width: 100%;
    /* position: relative; */
    height: 100vh;
  }

  @media (min-width: 767px) and (max-width: 1023px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    height: auto;
  }

  a {

  }
`;

const MenuWrap = styled.div`
  padding-left: 6px;
`

const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  position: sticky;
  background: url(${menuBackground}), #f9f9f9;
  top: 0;

  strong {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 18px;
    margin-left: 6px;
    color: linear-gradient(340.87deg, #4432f5 11.36%, #2681fa 88.9%);
  }
`;

const Divider = styled.div`
  height: 44px;
  width: 100%;
  background: radial-gradient(41.9% 100% at 50% 0%, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
  margin-bottom: 20px;
  position: sticky;
  top: 80px;
`

const SidebarLayout = () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
                icon
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      return (
        <Sidebar>
          <LogoWrap>
            <Logo>
              <path d="M170.505 23.17C169.315 23.17 168.42 22.7847 167.819 22.014C167.23 21.2433 166.912 20.2687 166.867 19.09L166.85 18.58L166.867 18.07C166.912 16.9027 167.235 15.9337 167.836 15.163C168.437 14.381 169.326 13.99 170.505 13.99C171.684 13.99 172.602 14.4093 173.259 15.248V11.321C173.259 11.2077 173.293 11.117 173.361 11.049C173.44 10.9697 173.537 10.93 173.65 10.93H174.415C174.528 10.93 174.619 10.9697 174.687 11.049C174.766 11.117 174.806 11.2077 174.806 11.321V22.609C174.806 22.7223 174.766 22.8187 174.687 22.898C174.619 22.966 174.528 23 174.415 23H173.684C173.571 23 173.48 22.966 173.412 22.898C173.344 22.8187 173.31 22.7223 173.31 22.609V21.878C172.664 22.7393 171.729 23.17 170.505 23.17ZM170.828 21.844C171.621 21.844 172.216 21.5833 172.613 21.062C173.01 20.5293 173.225 19.9003 173.259 19.175C173.27 19.0503 173.276 18.835 173.276 18.529C173.276 18.2117 173.27 17.9907 173.259 17.866C173.236 17.1747 173.015 16.5797 172.596 16.081C172.188 15.571 171.599 15.316 170.828 15.316C170.012 15.316 169.417 15.571 169.043 16.081C168.669 16.591 168.465 17.2597 168.431 18.087L168.414 18.58C168.414 20.756 169.219 21.844 170.828 21.844ZM180.956 23.17C179.709 23.17 178.746 22.8187 178.066 22.116C177.397 21.4133 177.04 20.4783 176.995 19.311L176.978 18.58L176.995 17.849C177.04 16.6817 177.403 15.7467 178.083 15.044C178.774 14.3413 179.732 13.99 180.956 13.99C182.18 13.99 183.132 14.3413 183.812 15.044C184.503 15.7467 184.871 16.6817 184.917 17.849C184.939 18.0983 184.951 18.342 184.951 18.58C184.951 18.818 184.939 19.0617 184.917 19.311C184.871 20.4783 184.509 21.4133 183.829 22.116C183.16 22.8187 182.202 23.17 180.956 23.17ZM180.956 21.895C181.681 21.895 182.253 21.6683 182.673 21.215C183.103 20.7503 183.336 20.0873 183.37 19.226C183.381 19.1127 183.387 18.8973 183.387 18.58C183.387 18.2627 183.381 18.0473 183.37 17.934C183.336 17.0727 183.103 16.4153 182.673 15.962C182.253 15.4973 181.681 15.265 180.956 15.265C180.23 15.265 179.652 15.4973 179.222 15.962C178.802 16.4153 178.576 17.0727 178.542 17.934L178.525 18.58L178.542 19.226C178.576 20.0873 178.802 20.7503 179.222 21.215C179.652 21.6683 180.23 21.895 180.956 21.895ZM190.633 23.17C189.421 23.17 188.474 22.83 187.794 22.15C187.114 21.4587 186.757 20.4953 186.723 19.26L186.706 18.58L186.723 17.9C186.757 16.6647 187.114 15.707 187.794 15.027C188.474 14.3357 189.421 13.99 190.633 13.99C191.449 13.99 192.135 14.1373 192.69 14.432C193.257 14.7153 193.676 15.0723 193.948 15.503C194.232 15.9337 194.385 16.3643 194.407 16.795C194.419 16.897 194.379 16.9877 194.288 17.067C194.209 17.1463 194.118 17.186 194.016 17.186H193.268C193.155 17.186 193.07 17.1633 193.013 17.118C192.957 17.0613 192.9 16.965 192.843 16.829C192.639 16.2737 192.356 15.8827 191.993 15.656C191.642 15.418 191.194 15.299 190.65 15.299C189.936 15.299 189.37 15.52 188.95 15.962C188.531 16.404 188.304 17.0783 188.27 17.985L188.253 18.58L188.27 19.175C188.304 20.0817 188.531 20.756 188.95 21.198C189.37 21.64 189.936 21.861 190.65 21.861C191.206 21.861 191.659 21.7477 192.01 21.521C192.362 21.283 192.639 20.8863 192.843 20.331C192.9 20.195 192.957 20.1043 193.013 20.059C193.07 20.0023 193.155 19.974 193.268 19.974H194.016C194.118 19.974 194.209 20.0137 194.288 20.093C194.379 20.1723 194.419 20.263 194.407 20.365C194.385 20.7843 194.232 21.2093 193.948 21.64C193.676 22.0707 193.257 22.4333 192.69 22.728C192.135 23.0227 191.449 23.17 190.633 23.17ZM199.47 23.17C198.688 23.17 198.025 23.0453 197.481 22.796C196.948 22.5353 196.552 22.2407 196.291 21.912C196.03 21.5833 195.9 21.3113 195.9 21.096C195.9 20.9827 195.94 20.8977 196.019 20.841C196.098 20.773 196.183 20.739 196.274 20.739H196.988C197.056 20.739 197.107 20.7503 197.141 20.773C197.186 20.7957 197.243 20.8467 197.311 20.926C197.572 21.2433 197.861 21.4927 198.178 21.674C198.507 21.8553 198.943 21.946 199.487 21.946C200.099 21.946 200.586 21.8327 200.949 21.606C201.323 21.3793 201.51 21.0507 201.51 20.62C201.51 20.3367 201.431 20.11 201.272 19.94C201.113 19.77 200.847 19.617 200.473 19.481C200.11 19.345 199.566 19.1977 198.841 19.039C197.855 18.8237 197.158 18.512 196.75 18.104C196.342 17.696 196.138 17.169 196.138 16.523C196.138 16.1037 196.263 15.7013 196.512 15.316C196.761 14.9193 197.13 14.602 197.617 14.364C198.116 14.1147 198.705 13.99 199.385 13.99C200.099 13.99 200.705 14.109 201.204 14.347C201.714 14.585 202.094 14.8627 202.343 15.18C202.604 15.4973 202.734 15.7637 202.734 15.979C202.734 16.081 202.694 16.166 202.615 16.234C202.547 16.302 202.462 16.336 202.36 16.336H201.714C201.555 16.336 201.442 16.2737 201.374 16.149C201.181 15.9337 201.017 15.7693 200.881 15.656C200.756 15.5313 200.569 15.4293 200.32 15.35C200.071 15.2593 199.759 15.214 199.385 15.214C198.83 15.214 198.405 15.333 198.11 15.571C197.815 15.7977 197.668 16.1037 197.668 16.489C197.668 16.727 197.73 16.931 197.855 17.101C197.98 17.2597 198.218 17.4127 198.569 17.56C198.92 17.696 199.442 17.8377 200.133 17.985C201.21 18.2117 201.969 18.5347 202.411 18.954C202.864 19.3733 203.091 19.9117 203.091 20.569C203.091 21.0563 202.949 21.4983 202.666 21.895C202.394 22.2917 201.98 22.6033 201.425 22.83C200.881 23.0567 200.229 23.17 199.47 23.17Z" fill="url(#paint1_linear)"/>
            </Logo>
          </LogoWrap>
          <Divider />
          <MenuWrap>
            <Tree edges={allMdx.edges} />
          </MenuWrap>
        </Sidebar>
      );
    }}
  />
);

export default SidebarLayout;
