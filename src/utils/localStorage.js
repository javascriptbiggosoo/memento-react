const localStorage = window.localStorage;

export const setItem = (key, data) => {
  const item = JSON.stringify(data);
  try {
    localStorage.setItem(key, item);
  } catch (err) {
    alert(
      `${key} 추가에 실패 했습니다. 총 데이터 용량이 5MB를 초과된 경우일 수 있습니다.`
    );
    console.log(err);
  }
};

export const getItem = (key, defaultValue) => {
  const item = localStorage.getItem(key);
  return JSON.parse(item) || defaultValue;
};
