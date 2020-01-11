import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import SectionWrapper from './service.style';
import Image from 'reusecore/src/elements/Image';
import { SERVICE_ITEMS } from 'common/src/data/SaasClassic';

const ServiceSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  Row,
  Col,
  serviceTitleStyle,
  secDes,
  img
}) => {  
  return (
    <SectionWrapper>
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="SERVICES" />
          <Heading
            {...secHeading}
            content="Transport Management System provides the following:"
          />
        </Box>

        <Box {...Row}>
          {SERVICE_ITEMS.map((item, index) => (
            <Box
              {...Col}
              key={`service-item-${index}`}
            >
              <Box  className="service_item">
                  <Image  {...img}src={item.icon}  alt={`screenshot-${index + 1}`}/>  
                <Heading as="h3" style={{color:"#a61e29"}} content={item.title} {...serviceTitleStyle} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </SectionWrapper>
  );
};

ServiceSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
  Row: PropTypes.object,
  Col: PropTypes.object,
  serviceTitleStyle: PropTypes.object,
  secDes: PropTypes.object,
};

ServiceSection.defaultProps = {
  secTitleWrapper: {
    mb: ['60px', '80px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#A61E29',
    mb: '12px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '540px',
    maxWidth: '100%',
  },
  Row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    ml: ['0', '-15px', '-20px', '-35px', '-35px'],
    mr: ['0', '-15px', '-20px', '-35px', '-35px'],
  },
  Col: {
    width: [1, 1 / 2, 1 / 4, 1 / 4],
    pl: ['15px', '15px', '25x', '35px', '35px'],
    pr: ['15px', '15px', '25px', '35px', '35px'],
    mb: '40px',
  },
  serviceTitleStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '17px'],
    fontWeight: '500',
    color: '#ff4361',
    mb: 0,
  },
  img:{
    width: ['250px', '250px', '250px', '250px'],
    height: ['250px', '250px', '250px', '250px'],
  },
  secDes: {
    fontSize: ['14px', '15px', '16px'],
    color: '#5d646d',
    lineHeight: '1.875',
    mt: '30px',
    ml: 'auto',
    mr: 'auto',
    width: '470px',
    maxWidth: '100%',
    textAlign: 'center',
  },
};

export default ServiceSection;
