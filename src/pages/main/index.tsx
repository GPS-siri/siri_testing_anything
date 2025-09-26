// import { css } from '@emotion/react';
import styled from '@emotion/styled';

// 데이터 객체 (나중에 별도 파일로 분리 가능)
const resumeData = {
  name: '박경실',
  intro:
    '저는 Javascript / Typescript / Node 기반의 풀스택 개발자로, 약 5년간 다양한 솔루션 및 서비스 개발에 참여해왔습니다.<br>아름다운 코드와 구조로 아름다운 제품을 만들기 위해 끊임없이 노력합니다.<br>실제 사용자 니즈를 빠르게 파악하고 반영하는 개발을 강점으로 삼고 있습니다. ',
  workExperience: [
    {
      company: '프로텍트',
      position: 'Frontend Developer / Backend Developer',
      period: '2020.08.20 - 2025.04.30',
      projects: [
        {
          title: '대한항공 AICC(AI Contact Center) 구축 프로젝트',
          period: '2024. 03 - 2025.03',
          description:
            '특이한 구조로부터 발생하는 난관이 많았던 프로젝트입니다. 개발을 진행하면서 브라우저의 여러 API를 테스트 해볼 수 있었고, 평소에는 많이 고민해보지 않았던 브라우저의 메모리 누수에 대해서도 많이 고민하면서 개발하였습니다.',
          did: [
            'Okta 로그인 세션 및 쿠키 확인, 리디렉션 과정에서의 병목 현상 해결, 로그인/Auth검증 로직을 CloudFront functions로 통합 관리하여, 페이지의 최초 렌더링 과정 단축',
            '브라우저의 BroadcastChannel API를 활용해, 각 기능 탭(iframe)간 통신 기능 개발',
            'AWS Connect 콘솔 로그인(Okta 로그인) 세션이 다수의 iframe 내에서 유지 되지 않는 현상 해결',
            '대고객(파일업로드/결제)화면 Frontend 개발',
            'Agent의 고객 전화 연결 업무 화면 Frontend/Backend 개발',
          ],
          stack: [
            'TypeScript',
            'React',
            'AWS Connect',
            'AWS Lambda',
            'AWS Dynamo DB',
            'AWS Lex',
          ],
        },
        {
          title: 'AI Chatbot 서비스 - AI 지혜 프로젝트(https://ai-jihye.com)',
          period: '2023.12 - 2025.04',
          description:
            '프로젝트의 전체적인 구조, 설계 부터 시작해서 Frontend와 Backend 개발까지 주도해서 개발한 제품으로, 스스로 결정해야 될 내용이 많았던 프로젝트 입니다. 그 중, 자연어 처리 머신의 개발에 가장 많은 시간을 투자 하였습니다. 설정한 임계값 보다 큰 점수를 받은 질문에 대해서는 최대한 가볍게 설계한 자체검색 엔진을 사용하고, 이외의 질문에 대해서는 LLM(Mistral 혹은 Claude)에 답변을 하도록 개발 하였습니다.',
          did: [
            '코사인유사도 기반 자체 검색 엔진과 LLM을 결합한 하이브리드 자연어 처리 머신 설계 및 개발',
            '확신도가 높은 질문은 자체 검색 엔진으로 빠르게 처리하고, 복잡하고 기존에 등록되지 않은 단어나 문장이 많은 질문은 LLM에 위임하는 방식으로 응답 정확도와 속도를 모두 최적화',
            '챗봇 실시간 응답 생성 속도가 평균 15초 --> 2초대로 개선되어, 약 85% 성능 향상',
          ],
          stack: [
            'Vue',
            'Node.js(Strapi)',
            'Pyton',
            'MySQL 5.7',
            'AWS EC2',
            'AWS Lex',
          ],
        },
        {
          title: '분양 CRM - Here 서비스 개발(https://here.re.kr)',
          period: '2020.08 - 2021.09',
          description:
            '고객(솔루션을 구입한 파트너 회사)과 가장 가깝게, 많이 커뮤니케이션을 하며 진행했던 프로젝트 입니다. 개발 기간과 유지 보수 기간 동안 고객의 피드백을 실시간으로 반영하여 사용성을 지속적으로 개선 하였습니다. 사용자들이 어떤 UI를 편안해 하고, 어떤 기능을 더 선호하는지 더 알 수 있게 되었습니다.',
          did: [
            '모델하우스 상담사 시스템 개발 - 아파트 구매에 관심이 있는 고객에게 분양 상품을 소개하고 판매하기 위해 사용하는 영업 전문가용 시스템입니다.',
            '건설사의 분양 CRM(Admin 페이지 포함) 서비스 개발',
            '카카오톡 전송 기능 개발',
            '원패스 QR 시스템 개발',
          ],
          stack: ['Vue', 'Node.js(strapi), MySQL 5.7', 'AWS EC2'],
        },
        {
          title:
            '(주)힐러비 / 넷마블 & Coway - 구독가능 건강관리 식품 & 화장품 쇼핑몰',
          period: '2022.02 - 2023.06',
          description:
            'React Native로 개발한 앱에 웹뷰(WebView)로 많은 화면을 구성한 프로젝트 입니다. 웹뷰에 React로 커머스 관련 화면과 구독 시스템 화면을 구현 하였습니다. 넷마블 모바일 개발팀과 협업하여, JS Bridge로 웹뷰와 앱 사이에서 모바일 기기의 네이티브 기능들을 컨트롤 하였습니다.',
          did: [
            '넷마블 모바일 팀과의 협업을 주도하며, JS Bridge로 연동 되는 기능들의 웹뷰 개발을 담당',
            '상품 구독 관리 기능 개발',
            '의사&약사 화상 상담 기능 개발 주도 - Sendbird 화상통화 솔루션 연동',
          ],
          stack: ['Typescript', 'React'],
        },
      ],
    },
  ],
  otherExperiences: [
    {
      title: '영업자 관리 CRM - Members Here 서비스 개발',
      position: 'Frontend,Backend Developer',
      period: '2023. 06. - 2023.12',
      description:
        '전국적으로 미분양 발생에 따른 조직분양 도입에 따라, 영업자를 관리하고 커미션을 정산하기 위하여 개발된 솔루션',
    },
    {
      title: '미분양 해결 플랫폼 - MGM Here(https://www.mgm-here.com)',
      position: 'Frontend,Backend Developer',
      period: '2022. 03. - 2022.06',
      description:
        '분양대행사가 지역공인 중개사와 협동하여, 고객을 유치하고 커미션을 받는 구조의 미분양 해결 솔루션 개발 > 기존에 엑셀로 하던 리스트 작업들을 시스템화 하여, 중앙집중적으로 관리하게 해주는 솔루션',
    },
    {
      title: '삼성 멀티캠퍼스 통합로그인 시스템 개발',
      position: 'Frontend Developer',
      period: '2021. 12. - 2022.02',
      description:
        '멀티캠퍼스 & 한국지식 교육협회 SSO 시스템 Frontend 개발, 학습 커리큘럼 코스 기능 추가 개발',
    },
    {
      title: 'LG전자 상업용 세탁기 관리자 페이지 개발',
      position: 'Frontend Developer',
      period: '2021. 05. - 2021.06',
      description: '세탁기 운영 현황 모니터링 시스템 구축 & 대시보드 화면 개발',
    },
    // ... 다른 경험들
  ],
  // skills: [
  //   {
  //     title: 'Overall.',
  //     description:
  //       '아름다운 유저 인터페이스 및 미려한 애니메이션 구현을 좋아합니다. 항상 최신의 기술이 옳다고 여기지 않습니다. 상황에 따라 적절한 선택이 있다고 믿습니다. 업무에 필요하다면 능숙한 분야가 아니더라도 적극적으로 탐색하여 최적의 결과를 낼 수 있도록 노력합니다. 회사 혹은 팀의 프로세스 및 문화를 개선하거나 바꾸려는 시도를 적극적으로 합니다.',
  //   },
  //   // ... 다른 스킬들
  // ],
  contact: [
    { type: 'email', label: '이메일', href: 'mailto:gps.siri92@gmail.com' },
    {
      type: 'linkedin',
      label: '링크드인',
      href: 'https://www.linkedin.com/in/gyeongsil-92276620b/',
    },
    { type: 'github', label: '깃허브', href: 'https://github.com/GPS-siri' },
  ],
};

// 스타일 컴포넌트
const ResumeContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
  /* font-family: 'Helvetica Neue', Arial, sans-serif; */
  color: #333;
  line-height: 1.6;
`;

const Section = styled.section`
  margin-bottom: 40px;
  h1,
  h2 {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 20px;
    font-weight: 300;
    color: #000;
  }
  h1 {
    font-size: 2.5em;
  }
  h2 {
    font-size: 2em;
  }
`;

const NameSection = styled(Section)`
  p {
    font-size: 1.2em;
    color: #555;
  }
`;

const Article = styled.article`
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0;
  }
  h3 {
    font-size: 1.5em;
    font-weight: 500;
    margin-bottom: 5px;
  }
  h4 {
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 20px;
  }
  h5 {
    font-size: 1em;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 5px;
  }
`;

const Position = styled.p`
  font-style: italic;
  color: #777;
  margin: 0;
`;

const Period = styled.p`
  color: #777;
  margin: 0 0 10px 0;
`;

const Description = styled.p`
  margin: 10px 0;
`;

const ProjectList = styled.div`
  margin-top: 15px;
  padding-left: 20px;
  border-left: 2px solid #eee;
`;

const Ul = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin: 10px 0;
  li {
    margin-bottom: 5px;
  }
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin-bottom: 10px;
  }
  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// 메인 컴포넌트
const Main_Resume = () => {
  return (
    <ResumeContainer>
      <NameSection>
        <h1>{resumeData.name}</h1>
        <p dangerouslySetInnerHTML={{ __html: resumeData.intro }} />
      </NameSection>

      <Section>
        <h2>Work Experience.</h2>
        {resumeData.workExperience.map((work, index) => (
          <Article key={index}>
            <h3>{work.company}</h3>
            <Position>{work.position}</Position>
            <Period>{work.period}</Period>
            <ProjectList>
              {work.projects.map((project, pIndex) => (
                <Article key={pIndex}>
                  <h4>{project.title}</h4>
                  <Period>{project.period}</Period>
                  <Description>{project.description}</Description>
                  <h5>What did I do.</h5>
                  <Ul>
                    {project.did.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </Ul>
                  <h5>Tech Stack.</h5>
                  <Ul>
                    {project.stack.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </Ul>
                </Article>
              ))}
            </ProjectList>
          </Article>
        ))}
      </Section>

      <Section>
        <h2>Other Experiences.</h2>
        {resumeData.otherExperiences.map((exp, index) => (
          <Article key={index}>
            <h3>{exp.title}</h3>
            <Position>{exp.position}</Position>
            <Period>{exp.period}</Period>
            <Description>{exp.description}</Description>
          </Article>
        ))}
      </Section>

      {/* <Section>
        <h2>Skills.</h2>
        {resumeData.skills.map((skill, index) => (
          <Article key={index}>
            <h3>{skill.title}</h3>
            <Description>{skill.description}</Description>
          </Article>
        ))}
      </Section> */}

      <Section>
        <h2>Contact.</h2>
        <ContactList>
          {resumeData.contact.map((item, index) => (
            <li key={index}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ContactList>
      </Section>
    </ResumeContainer>
  );
};

export default Main_Resume;
