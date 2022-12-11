import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { categoryState, stackSelector, stackState } from "../atom";

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
  const stacks = useRecoilValue(stackSelector(category));

  const onCategoryInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  const onStackInput = (event: React.FormEvent<HTMLSelectElement>) => {

  };

  console.log('stacks', stacks);
  
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
          <option>{stacks}</option>
        </select>
        <button>추가</button>
      </div>
    </div>
  );
}

export default SelectStack;
