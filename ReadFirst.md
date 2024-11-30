# twitter clone 만들기

## vite설치

npm create vite@latest --> 최신버전으로 설치

- 최신버전설치 y 선택
- 프로젝트 이름 입력
- react 프레임워크 선택
- typescript + SWC 선택
- cd 프로젝트명 으로 폴더 이동
- npm install 템플릿 설치
- npm run dev 정상`작동여부 확인
- src/ 폴더로 이동 후 index.css, app.css 삭제
- main.tsx, App.tsx에서 css와 svg모듈을 삭제 후 function 껍데기만 남기고 모든 코드 삭제
- assets/ 폴더 삭제
- 서버페이지 다시 띄웠을때 빈페이지 나오면 성공

## git 원격저장소 생성 및 연결

- git init .
- github 웹사이트 접속해서 저장소 생성
- git remote add origin '저장소url'

## 필수 패키지설치

- npm i react-router-dom@6.14.2
- npm i styled-reset
- npm i styled-components@6.0.7
- npm i @types/styled-components -D
