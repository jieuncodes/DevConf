import { useState, useEffect, ChangeEvent } from "react";
import { InferGetServerSidePropsType } from "next";
import stackData from "../../tech_stack.json";
import Seo from "../components/Seo";

interface StackData {
  category: string;
  category_id: string;
  name: string;
  tech_stack_num: number;
  tech_stack_id: string;
}

let currCategoryId = "";

export default function Home() {
  const [category, setCategory] = useState<StackData[]>([]);
  const [categoryId, setCategoryId] = useState("");
  const [stacks, setStacks] = useState<StackData[]>(stackData);

  useEffect(() => {
    const getCategory = async () => {
      setCategory(stackData);
    };
    getCategory();
  }, []);

  const handleCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    currCategoryId = event.target.value;

    setCategoryId(currCategoryId);
  };

  useEffect(() => {
    const getStack = async (currCategoryId: string) => {
      let resultStacks = [];
      if (currCategoryId !== "") {
        resultStacks = stackData.filter((e) => {
          return e.category_id === currCategoryId;
        });
      } else {
        resultStacks = stackData;
      }

      setStacks(resultStacks);
    };
    getStack(currCategoryId);
  }, [categoryId]);

  return (
    <div className="container">
      <Seo title={Home} />

      <main>
        <div className="box">
          <h4 className="title">Add Conference</h4>

          <form className="add-conf-form" method="POST">
            <div>
              <label htmlFor="conf-title">컨퍼런스명</label>
              <input id="conf-title" type="text" />
            </div>
            <div>
              <label htmlFor="date">날짜</label>
              <input id="start-date" type="date" />
              <span> ~ </span>
              <input id="end-date" type="date" />
            </div>
            <div>
              <label htmlFor="location">위치</label>
              <input id="location" />
            </div>
            <div>
              <label htmlFor="description">내용</label>
              <input id="description" type="text" />
            </div>
            <div>
              <label htmlFor="site-link">사이트</label>
              <input id="site-link" type="url" />
            </div>
            <div>
              <label htmlFor="tech-stack">기술 스택</label>
              <div id="tech-stack">
                <label htmlFor="category">카테고리</label>
                <select id="category" onChange={(e) => handleCategory(e)}>
                  <option>--카테고리 선택--</option>
                  {category
                    .filter(
                      (arr, index, cb) =>
                        index ===
                        cb.findIndex((e) => e.category === arr.category)
                    )
                    .map((stackInfo, index) => (
                      <option key={index} value={stackInfo.category_id}>
                        {stackInfo.category}
                      </option>
                    ))}
                </select>

                <select id="stacks">
                  <option>--스택 선택--</option>
                  {stacks.map((getStack, index) => (
                    <option key={index} value={getStack.tech_stack_id}>
                      {getStack.name}
                    </option>
                  ))}
                </select>
                <input type="submit" value="추가" />
              </div>
            </div>

            <input type="submit" value="등록" />
          </form>
        </div>
      </main>

      <footer></footer>

      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
