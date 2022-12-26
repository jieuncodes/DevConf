import { useForm } from "react-hook-form";
import Seo from "./Seo";
import SelectStack from "./SelectStack";

interface IAddConfForm {
  title: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  description?: string;
  site?: string;
}

function AddConf() {
  const { register, handleSubmit } = useForm<IAddConfForm>();

  const handleValid = (data: IAddConfForm) => {
    console.log("VALID. ADDING A CONF", data.title);
  };
  return (
    <>
      <Seo title="Add Conference"></Seo>
      <div>
        <h1 className="title">Add Conference</h1>

        <form onSubmit={handleSubmit(handleValid)}>
          <div>
            <label htmlFor="conf-title">컨퍼런스명</label>
            <input
              id="conf-title"
              {...register("title", {
                required: "컨퍼런스의 이름을 적어주세요.",
              })}
            />
          </div>
          <div>
            <label htmlFor="date">날짜</label>
            <input
              {...register("startDate", {
                required: "행사의 시작 날짜를 입력해주세요.",
              })}
              id="start-date"
              type="date"
            />
            <span> ~ </span>
            <input {...register("endDate")} id="end-date" type="date" />
          </div>
          <div>
            <label htmlFor="location">위치</label>
            <input
              {...register("location", {
                required: "행사의 주최 위치를 입력해주세요.",
              })}
              id="location"
            />
          </div>
          <div>
            <label htmlFor="description">내용</label>
            <input {...register("description")} id="description" />
          </div>
          <div>
            <label htmlFor="site-link">사이트</label>
            <input {...register("site")} id="site-link" type="url" />
          </div>
          <SelectStack />
          <button>컨퍼런스 등록</button>
        </form>
      </div>
    </>
  );
}

export default AddConf;
