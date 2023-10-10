const localStorage = window.localStorage;

export const setItem = (key: string, data: unknown) => {
  const item = JSON.stringify(data);
  try {
    localStorage.setItem(key, item);
  } catch (err) {
    alert(
      `${key} 추가에 실패 했습니다. 총 데이터 용량이 5MB를 초과된 경우일 수 있습니다.`
    );
    console.error(err);
  }
};

export const getItem = (key: string, defaultValue: unknown) => {
  const item = localStorage.getItem(key);

  if (!item) {
    return defaultValue;
  }
  return JSON.parse(item);
};
