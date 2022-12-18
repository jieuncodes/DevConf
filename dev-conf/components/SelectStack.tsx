import { useRecoilState } from "recoil";
import { categoryState, stackSelector } from "../atoms";
import _ from "lodash";

const allCategory = [
  "전체보기",
  "데브옵스",
  "데이터",
  "데이터베이스",
  "모바일",
  "백엔드",
  "언어",
  "테스팅툴",
  "프론트엔드",
  "협업툴",
];

function SelectStack() {
  const [category, setCategory] = useRecoilState(categoryState);
  const [stacks, setStacks] = useRecoilState(stackSelector as any);
  console.log('stacks', stacks);
  console.log('', typeof(stacks));
  const onCategoryInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  const onStackInput = (event: React.FormEvent<HTMLSelectElement>) => {
    console.log('CURRENT TARGET IS', event.currentTarget.value);
    setStacks(event.currentTarget.value);

  };
  

  return (
    <div>
      <label htmlFor="tech-stack">기술 스택</label>
      <div id="tech-stack">

        <label htmlFor="category">카테고리</label>
        <select id="category" value={category} onInput={onCategoryInput}>
          <option>--카테고리 선택--</option>
          {allCategory.map((category) => (
            <option key={category}> {category} </option>
          ))}
        </select>

        <label htmlFor="stack">스택</label>
        <select id="stack" onInput={onStackInput}>
          <option>--스택 선택--</option>
          {stacks.map((stack) => (
            <option key={stack}> {stack} </option>
          ))}
        </select>
        <button>추가</button>
      </div>
    </div>
  );
}

export default SelectStack;
