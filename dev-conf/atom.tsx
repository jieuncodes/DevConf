import { atom, selector, selectorFamily } from "recoil";
import stackData from "../tech_stack.json";

export interface IStack {
  category:
    | "전체보기"
    | "데브옵스"
    | "데이터"
    | "데이터베이스"
    | "모바일"
    | "백엔드"
    | "언어"
    | "테스팅툴"
    | "프론트엔드"
    | "협업툴";
  name: string;
  tech_stack_num: number;
  tech_stack_id: string;
}

export const categoryState = atom<IStack["category"]>({
  key: "category",
  default: "전체보기",
});
export const stackState = atom({
  key: "stack",
  default: stackData.filter((stack) => stack),
});

const getStacksList = (category: IStack["category"]) => {
  const filteredStacks = stackData.filter((stackInfo) => {
    return stackInfo.category === category;
  });
  return filteredStacks;
};

export const stackSelector = selectorFamily({
  key: "stackSelector",
  get: (category: IStack["category"]) => {
    const stacks = getStacksList(category);
    return stacks;
  },
  // ({ get }) => {
  // const category = get(categoryState);
  // const stacks = get(stackState);

  // console.log('SELECTED CATEGORY = ', JSON.stringify(category));
  // console.log('STACKS', stacks);
  // return stacks.filter((stack) => stack.category == JSON.stringify(category));
  // },
});
