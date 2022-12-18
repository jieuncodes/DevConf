import _ from "lodash";
import { atom, selector } from "recoil";
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

const allStackNames = () => {
  const stacks: string[] = [];
  _.forEach(stackData, function (stack, _) {
    stacks.push(stack.name);
  });
  return stacks;
};

export const categoryState = atom<IStack["category"] | "">({
  key: "category",
  default: "",
});

export const stackState = atom({
  key: "stacks",
  default: allStackNames(),
});

export const stackSelector = selector({
  key: "stackSelector",

  get: ({ get }) => {
    const category = get(categoryState);
    console.log("NOW THE CATEGORY IS", category);

    const resultStacks = stackData.filter((stackInfo) => {
      if (category === "전체보기") {
        return allStackNames();
      }

      return stackInfo.category === category;
    });

    const stacks: string[] = [];
    _.forEach(resultStacks, function (stack, _) {
      stacks.push(stack.name);
    });
    return stacks;
  },

  set: ({ set }, stackInput) => {
    const getInputStackInfo = stackData.find((stackInfo) => {
      console.log("STACKINPUT", stackInput);
      console.log("stackInfo.name", stackInfo.name);
      console.log("", stackInfo);
      if (stackInfo.name === stackInput) {
        return stackInfo;
      }
      return null;
    });
    
    set(categoryState, getInputStackInfo.category); //type
  },
});
