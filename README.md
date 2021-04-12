<p align="middle" >
  <img width="200px;" src="./src/images/subway_emoji.png"/>
</p>
<h2 align="middle">level1 - 지하철 노선도 관리 SPA</h2>
<p align="middle">Browser History API를 이용해 구현하는 지하철 노선도 관리 SPA</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</p>

# 🔥 Projects!

<p align="middle">
  <img src="./src/images/readme/subway_app_preview.png">
</p>

## 🎯 step1

### Webpack을 통한 번들링

- [x] Webpack에서 babel을 설정한다.
- [x] 기타 플러그인 및 설정은 본인이 필요에 따라 추가한다.

### 라우팅 기능

- [x] Browser History Api를 이용하여 SPA처럼 라우팅을 적용한다.
  - [x] 메뉴를 클릭하면 새로고침이 되지 않으면서 선택한 메뉴가 표시된다.
    - [x] 뒤로가기 버튼이 활성화되고, URL도 함께 변경된다.
    - [x] 단, 현재 위치와 같은 메뉴를 클릭한 경우 History가 추가되지 않는다.
  - [x] 뒤로가기 버튼을 클릭하면 이전 메뉴가 화면에 표시된다.
  - [x] 다시 앞으로가기 버튼을 클릭하면 처음 선택한 메뉴가 화면에 표시된다.

### 회원 기능

- [x] 유저는 회원 가입을 할 수 있다,
  - [x] 회원 가입시 받는 정보는 `name`, `email`, `password`이다.
- [x] 유저는 로그인 할 수 있다.
  - [x] 로그인하지 않으면 정보를 볼 수 없다.
  - [x] 로그인하고 나면 로그인 버튼은 로그아웃 버튼으로 변경되어야 한다.
- [x] 유저는 로그아웃할 수 있다.
  - [x] 로그아웃하면 `/` 루트 페이지로 돌아온다.

## 🎯🎯 step2

### 지하철 역 관리 기능

- [x] 지하철 역을 **등록**할 수 있다.
  - [x] 역 이름 입력창과 추가 버튼을 표시한다.
    - [x] 지하철 역 이름은 최소 2자, 최대 20자이다.
    - [x] 중복된 지하철 역은 등록할 수 없다.
    - [x] 역 이름 입력창에 autofocus된다.
  - [x] '추가'버튼 클릭 또는 Enter키 입력으로 역을 추가할 수 있다.
- [x] 지하철 역 이름을 **수정** 및 **삭제**할 수 있다.
  - [x] 한 역의 ✏️ 버튼을 클릭하면, ✅ 버튼(수정확인), ⤴️버튼(수정취소), ⛔️ 버튼(삭제)을 표시한다.
    - [x] 지하철 역 이름 입력창에 autofocus된다.
  - [x] ✅ 버튼 클릭 또는 Enter키 입력으로 역이름을 수정할 수 있다.
    - [x] 지하철 역 등록과 마찬가지로 유효성 검사를 한다.
  - [x] ⤴️버튼 클릭 또는 ESC키 입력으로 역이름 수정을 취소할 수 있다.
  - [x] ⛔️ 버튼 클릭 시 지하철 역을 삭제할 수 있다.
    - [x] 이미 노선에 등록된 역인 경우 삭제할 수 없다.
    - [x] confirm을 이용하여 한 번 더 유저가 확인할 수 있어야 한다.

### 지하철 노선 관리 기능

- [x] 지하철 노선 정보를 **등록**할 수 있다.
  - [x] 첫째 줄에는 노선 이름 입력창과 상행역, 하행역 입력창을 표시한다.
    - [x] 지하철 노선의 이름은 최소 2자, 최대 10자이다.
    - [x] 중복된 지하철 노선 이름은 등록할 수 없다.
    - [x] 노선 이름 입력창에 autofocus된다.
  - [x] 둘째 줄에는 (최초 상행역과 하행역 구간의)거리, 시간, 색상 입력창, 추가 버튼을 표시한다.
  - [x] '추가'버튼 클릭 또는 Enter키 입력으로 노선 정보를 추가할 수 있다.
- [x] 지하철 노선 정보를 **수정** 및 **삭제**할 수 있다.
  - [x] 한 역의 편집버튼을 클릭하면, 수정확인버튼, 수정취소버튼, 삭제버튼을 표시한다.
    - [x] 노선 이름 입력창에 autofocus된다.
  - [x] 수정확인버튼 클릭 또는 Enter키 입력으로 노선 정보를 수정할 수 있다.
    - [x] 지하철 노선 등록과 마찬가지로 유효성 검사를 한다.
- [x] 삭제버튼 클릭으로 지하철 노선 정보를 삭제할 수 있다.
  - [x] 삭제 시 confirm을 이용하여 한 번 더 유저가 확인할 수 있어야 한다.
- [x] 지하철 노선 리스트를 **조회**할 수 있다.

### 지하철 구간 관리 기능

- [x] 노선 별로 구간을 **등록** 및 **삭제**할 수 있다.
  - [x] 한 역의 편집버튼을 클릭하면, 해당 역 위 아래의 추가버튼을 활성화하고, 해당 역의 수정취소버튼을 표시한다.
    - [x] 단, 상행역은 해당 역 아래의 ✚버튼만, 하행역은 해당 역 위의 ✚버튼만 활성화한다.
  - [x] 활성화된 추가버튼 클릭 시 해당 노선 외의 역을 선택할 수 있는 Select요소와 추가확인버튼을 표시한다.
    - [x] 추가확인버튼을 클릭 또는 Enter키 입력으로 구간을 추가할 수 있다.
  - [x] 삭제버튼 클릭으로 지하철 구간 정보를 삭제할 수 있다.
    - [x] 삭제 시 confirm을 이용하여 한 번 더 유저가 확인할 수 있어야 한다.

※ 구간 등록

- 지하철 노선에 '구간'을 추가하는 기능은 '노선'에 역을 추가하는 기능이라고도 할 수 있다.
- 역과 역 사이를 '구간'이라 하고 이 구간들의 모음이 '노선'이다.
- 하나의 역은 여러개의 '노선'에 추가될 수 있다.
- 역과 역 사이에 새로운 역이 추가 될 수 있다.
- '노선'에서 갈래길은 생길 수 없다.

## 🎯🎯🎯 step3

### 전체보기 기능

- [x] 노선의 상행 종점부터 하행 종점까지 연결된 순서대로 노선과 역 목록을 조회할 수 있다.
- [x] 조회를 위한 UI는 스스로 만든다.

<br>

## ⚙️ Before Started

#### <img alt="Tip" src="https://img.shields.io/static/v1.svg?label=&message=Tip&style=flat-square&color=673ab8"> 로컬에서 서버 띄워서 손쉽게 static resources 변경 및 확인하는 방법

로컬에서 웹서버를 띄워 html, css, js 등을 실시간으로 손쉽게 테스트해 볼 수 있습니다. 이를 위해서는 우선 npm이 설치되어 있어야 합니다. 구글에 `npm install` 이란 키워드로 각자의 운영체제에 맞게끔 npm을 설치해주세요. 이후 아래의 명령어를 통해 실시간으로 웹페이지를 테스트해볼 수 있습니다.

```
npm install -g live-server
```

실행은 아래의 커맨드로 할 수 있습니다.

```
live-server 폴더명
```

<br>

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/javascript-subway/issues)에 등록해주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/javascript-subway/blob/main/LICENSE) licensed.
