import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 100px 0 80px 0;
  
  @media (max-width: 990px) {
    padding: 80px 0 60px 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0 20px 0;
  }

  .feature_col {
    .icon__wrapper {
      background-color: rgb(166, 30, 41);
        color: #fff;
      font-size: 30px;
    }   
  }
`;

export default SectionWrapper;
