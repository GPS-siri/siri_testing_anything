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
          title: '토스페이먼츠 JavaScript SDK.',
          period: '2020. 08 - 현재',
          description:
            '토스페이먼츠의 결제를 연동하기 위해 사용하는 JavaScript SDK를 만들고 유지보수하고 있습니다.',
          did: [
            '일반 결제 JavaScript SDK 구현',
            '커넥트페이 JavaScript SDK 구현',
            'npm 퍼블릭 패키지 배포',
          ],
          stack: ['TypeScript', 'Jest', 'Rollup'],
        },
        // ... 다른 프로젝트들
      ],
    },
  ],
  otherExperiences: [
    {
      title: 'GDG Korea WebTech.',
      position: 'Organizer',
      period: '2018. 08. - 현재',
      description:
        '구글의 웹 기술 기반 개발자 커뮤니티인 GDG Korea WebTech의 오거나이저를 맡고 있습니다. 여러가지 행사를 주최하거나 돕고 있습니다.',
    },
    // ... 다른 경험들
  ],
  skills: [
    {
      title: 'Overall.',
      description:
        '아름다운 유저 인터페이스 및 미려한 애니메이션 구현을 좋아합니다. 항상 최신의 기술이 옳다고 여기지 않습니다. 상황에 따라 적절한 선택이 있다고 믿습니다. 업무에 필요하다면 능숙한 분야가 아니더라도 적극적으로 탐색하여 최적의 결과를 낼 수 있도록 노력합니다. 회사 혹은 팀의 프로세스 및 문화를 개선하거나 바꾸려는 시도를 적극적으로 합니다.',
    },
    // ... 다른 스킬들
  ],
  contact: [
    { type: 'email', label: '이메일', href: 'mailto:hyunseob.me@gmail.com' },
    { type: 'blog', label: '블로그', href: 'https://seob.dev' },
    {
      type: 'linkedin',
      label: '링크드인',
      href: 'https://www.linkedin.com/in/hyunseob-lee-020094121/',
    },
    { type: 'github', label: '깃허브', href: 'https://github.com/hyunseob' },
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

      <Section>
        <h2>Skills.</h2>
        {resumeData.skills.map((skill, index) => (
          <Article key={index}>
            <h3>{skill.title}</h3>
            <Description>{skill.description}</Description>
          </Article>
        ))}
      </Section>

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
