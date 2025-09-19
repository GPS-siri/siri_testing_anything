import { css } from '@emotion/react';

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    // background-color: #121212;
    // color: #ffffff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #root {
    /* 이 부분은 FractalTree 같은 전체 화면 페이지와 충돌할 수 있으므로, 
       필요에 따라 주석 처리하거나 수정해서 사용하세요. 
       예시로 남겨둡니다.
    */
    // max-width: 1280px;
    /* margin: 0 auto; */
    /* padding: 2rem; */
    /* text-align: center; */
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
      animation: logo-spin infinite 20s linear;
    }
  }
`;

export default globalStyles;
