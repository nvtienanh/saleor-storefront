import React from "react";
import { FormattedMessage } from "react-intl";
import Media from "react-responsive";

import { DropdownSelect } from "@components/atoms";
import { mediumScreen } from "@styles/constants";

import * as S from "./styles";

export const TopMenu: React.FC = () => {
  return (
    <S.Wrapper>
      <S.BorderedWrapper>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <S.LinkList>
          <Media maxWidth={mediumScreen}>
            <S.Link target="_blank" href="https://demo.saleor.io/graphql/">
              <S.TextEmphasis>
                <FormattedMessage defaultMessage="API" />
              </S.TextEmphasis>
            </S.Link>
            <S.Divider />
            <S.Link target="_blank" href="https://demo.saleor.io/dashboard/">
              <S.TextEmphasis>
                <FormattedMessage defaultMessage="Dashboard" />
              </S.TextEmphasis>
            </S.Link>
          </Media>
          <Media minWidth={mediumScreen}>
            <S.Link target="_blank" href="https://demo.saleor.io/dashboard/">
              <FormattedMessage
                defaultMessage="SHOP EVENTS &amp; SAVE UP TO <emphasis>65% OFF</emphasis>"
                values={{
                  emphasis: (children: any) => (
                    <S.TextEmphasis>{children}</S.TextEmphasis>
                  ),
                }}
              />
            </S.Link>
            <S.Divider />
            <S.Link href="tel:0123456789">
              <FormattedMessage
                defaultMessage="Call us: <emphasis>0123456907</emphasis>"
                values={{
                  emphasis: (children: any) => (
                    <S.TextEmphasis>{children}</S.TextEmphasis>
                  ),
                }}
              />
            </S.Link>
          </Media>
        </S.LinkList>
        <S.Element>
            <S.Sort>
              <DropdownSelect
                // onChange={onChange}
                // options={sortOptions}
                // value={sortOptions.find(
                //   option => option.value === activeSortOption
                // )}
              />
            </S.Sort>
          </S.Element>
      </S.BorderedWrapper>
    </S.Wrapper>
  );
};
