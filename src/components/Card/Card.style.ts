import styled from 'styled-components';

interface ICardContentProps { 
  isFolded?: boolean;
  isVariant?: boolean;
  showVariants?: boolean;
}

export const CardWrap = styled.div`
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const CardHeader = styled.header`
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #F6F5E8;
    border-radius: 5px;
  }

  p, h6 {
    margin: 0 !important;
  }
`;

export const CardContent = styled.div<ICardContentProps>`
  overflow: hidden;
  height: ${props => props.isFolded && !props.isVariant ? 0 : 'auto'};
  padding: ${props => props.isFolded && !props.isVariant ? 0 : '12px'};
  background: ${props => props.isVariant ? '#EBE1D5' : '#F6F5E8'};
  border-radius: 0 0 5px 5px;
  transition: all .4s;

  .content {
    text-align: center;
    h6 {
      margin: 0;
    }
  }
`;

export const ProdThumb = styled.img`
  vertical-align: bottom;
  width: 150px;
`;

export const VariantsFlyout = styled.div<ICardContentProps>`
  @keyframes flyout {
    0% {
      left: -100%;
      opacity: 0;
    }
    100% {
      left: 12px;
      opacity: 1;
    }
  }

  position: absolute;
  top: 50%;
  transform: translateY(calc(-50% + 12px));
  overflow: auto;
  width: 100%;
  max-height: 100%;
  animation: flyout .8s forwards;
`;

export const VariantsTitle = styled.h6`
  margin-top: 5px !important;
  color: #999999 !important;
`;
