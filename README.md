# Memento-with React

https://tbs01215.github.io/memento-react/

브라우저 시작 페이지에서 다양한 기능을 사용할 수 있도록 해주는 [momentum](https://momentumdash.com/)을 리액트를 이용해 클론코딩합니다.
바닐라 자바스크립트만 사용했다면 일일이 구현해야했을 요소들이 자동으로 처리됩니다.

## 구현

### 좌측 상단

- 검색어 입력시 구글 포털 검색창을 보여줍니다.
- Google, DuckDuckGo, Naver 중 원하는 곳에서 검색할 수 있습니다.

### 우측 상단

- 사용자가 위치서비스를 허용하면 그 위치의 날씨를 알려줍니다.
  오픈 API인 https://openweathermap.org/ 에서 정보를 받아옵니다.

### 중앙

- 현재 시간을 띄워줍니다.
- 사용자의 이름을 입력받아 인삿말을 띄워줍니다.
  입력시 이름이 로컬스토리지로 저장되며 이름 변경 버튼이 생성됩니다.

### 우측 하단

- 할 일을 입력받아 로컬스토리지에 저장합니다.
  클릭시 완료여부를 토글할 수 있습니다.
- 완료 처리한 상태로 페이지를 새로고침하면 해당 할 일은 표시되지 않습니다.

<img src="https://user-images.githubusercontent.com/28939278/216800752-4afec1fa-ca35-466b-add2-86d1f2e8a7a5.gif">

