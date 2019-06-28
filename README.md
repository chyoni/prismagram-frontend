## 첫번째

- Styles폴더와 Component 폴더를 만들자
- Styles 폴더에 Theme.js 와 GlobalStyles.js 에서 기본 세팅
- styled-reset과 \*{box-sizing} 먼저 추가해주고 자주 쓰이는 css 정리
- App에 추가

## 두번째

- 필요한 Router들 체크 후 만들고 로그인 여부에 따라 다른 Routing을 해줘야 함

## 세번째

- 이제 LocalState를 설정해줘야함 우리가 필요한건 로그인 로그아웃 여부만 필요함
- ApolloClient를 통해서 우리가 만든 서버의 uri와 연결해주고 (서버는 실행상태여야함)
- LocalState를 만들어서 logout login 기능을 LocalState로 만들어줌
