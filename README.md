## react.js를 사용한 사이트 만들기

<img src="https://raw.githubusercontent.com/ehcjswo/site2023-react02-/main/src/assets/images/gitImg01.jpg" />
<br><br>
 
- 이 사이트는 React를 기반으로 만든 사이트로, https://programmers.co.kr/ 프로그래머스 카피 싱글 페이지 입니다.
- 컴포넌트 기반 접근 방식은 웹 개발을 보다 효율적이고 유지보수를 쉽게 만들어 줍니다.
<br><br>

- Live Demo : https://dh2023-react02.netlify.app/

## 사용 스택 
- React: JavaScript 라이브러리로 사용자 인터페이스를 구축하기 위해 사용됩니다.
- react-router-dom: React 애플리케이션의 클라이언트 사이드 라우팅을 관리하는 라이브러리입니다.
- Route: react-router-dom에서 제공하는 라우터 구성 요소 중 하나로, 경로에 따라 특정 컴포넌트를 렌더링합니다.
- Routes: react-router-dom에서 제공하는 라우터 구성 요소로, 여러 Route를 그룹화하고, 라우팅 구성을 선언적으로 표현할 수 있도록 도와줍니다.
<br><br>

재사용성: 컴포넌트는 독립적이고 재사용 가능한 빌딩 블록으로 구성됩니다. 따라서 비슷한 기능을 하는 컴포넌트를 여러 곳에서 반복해서 사용할 수 있으며, 코드의 중복을 줄이고 생산성을 높입니다.

모듈화: 컴포넌트 기반 개발은 애플리케이션을 작은 단위로 나누어 개발하는 모듈화 접근 방식을 촉진합니다. 각 컴포넌트는 특정 기능을 가지고 있으며, 이러한 작은 모듈들을 조합하여 애플리케이션을 구축할 수 있습니다.

가독성: 컴포넌트 기반 접근 방식은 코드를 더 직관적이고 가독성 있게 만듭니다. 각 컴포넌트는 자체적으로 독립적이며, 각 컴포넌트의 코드는 해당 컴포넌트의 기능과 역할을 명확하게 나타내기 때문입니다.

유지보수 용이성: 컴포넌트 기반 개발은 코드의 재사용성과 모듈화로 인해 유지보수가 쉬워집니다. 특정 기능이나 디자인을 변경해야 할 때, 해당하는 컴포넌트만 수정하면 되므로 전체 애플리케이션을 수정하는 것보다 훨씬 효율적입니다.

상태 관리: React 컴포넌트는 상태(state)를 관리할 수 있습니다. 상태는 컴포넌트의 데이터를 나타내며, 상태가 변경되면 React는 자동으로 UI를 업데이트합니다. 이를 통해 동적인 UI를 쉽게 구현할 수 있습니다.

성능 최적화: React는 가상 DOM(Virtual DOM)을 사용하여 성능을 최적화합니다. 가상 DOM은 실제 DOM과 동기화되어 비용이 큰 DOM 조작을 최소화하고 효율적인 업데이트를 수행합니다.

커뮤니티 지원: React는 큰 개발자 커뮤니티와 함께 발전하고 있습니다. 따라서 다양한 오픈 소스 라이브러리, 플러그인, 도구 등이 존재하며, 이들을 활용하여 개발 생산성을 높일 수 있습니다.
<br><br>

## 구현 내역

- component 를 이용한 효율적인 관리
- router기능을 활용한 페이지

<br>
