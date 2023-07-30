import { useRecoilState } from "recoil";
import { userNameState } from "../../atoms";

interface IProps {
  onSubmit: (userName: string) => void;
}

export default function UserNameInput({ onSubmit }: IProps) {
  const [userName, setUserName] = useRecoilState(userNameState);
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onSubmit(userName);
    setUserName("");
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(ev.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="이름을 알려주세요."
        onChange={handleChange}
        value={userName}
        autoFocus={true}
      ></input>
    </form>
  );
}
