import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';
import {RiMouseLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

const Container = styled.div`
  padding: 0 10px;
`;

const gradientAni = keyframes`
  to {
    background-position: 200%;
  }
`;

export function Intro() {
  return (
    <Container className='Intro'>
      <h1
        css={{
          fontSize: 70,
          textAlign: 'center',
          lineHeight: 1.1,
          marginBottom: 40,
          fontFamily: 'SF Pro Display',
          fontWeight: 900,
          background:
            'linear-gradient(to right, #5083fc, #9528e2, #a61ef0, #5083fc)',
          backgroundSize: '200%',

          animation: `${gradientAni} 1s linear infinite`,
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Welcome to Qhlab
      </h1>

      <div
        css={{
          textAlign: 'center',
          fontSize: 18,
          fontStyle: 'italic',
          color: 'grey',

          a: {
            background: 'linear-gradient(to right bottom, royalblue, hotpink)',
            color: 'white',
            padding: '4px 8px',
            fontWeight: 'bold',
            borderRadius: 4,
            margin: '0 6px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
          },

          code: {
            backgroundColor: 'lavender',
            fontSize: 14,
            padding: 4,
          },
        }}
      >
        <p>
          → Check out the example page of
          <Link to='/posts'>
            Posts <RiMouseLine />
          </Link>
        </p>

        {/* <p css={{marginTop: 10}}>
          Source code at <code>pages/PostsPage/index.jsx</code>
        </p> */}
      </div>
    </Container>
  );
}
