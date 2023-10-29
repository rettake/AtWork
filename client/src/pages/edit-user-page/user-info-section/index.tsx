import { useNavigate, useParams } from "react-router";
import { useGetUserByIdQuery } from "../../../app/api/users";
import { Dispatch, FormEvent, useEffect, useState } from "react";
import { UiBackArrowIcon } from "../../../shared/ui/UiBackArrowIcon";
import { UiTextField } from "../../../shared/ui/UiTextField";
import { UiButton } from "../../../shared/ui/UiButton";
import { Category } from "./category";

export interface IFormInterface {
  name?: string;
  nickname?: string;
  email?: string;
  city?: string;
  phone?: string;
  company?: string;
}

export function UserInfoSection({
  setShowModal,
}: {
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}) {
  const { id } = useParams();
  const { data } = useGetUserByIdQuery(String(id));

  const navigate = useNavigate();

  const [activeElement, setActiveElement] = useState<string>("Element1");
  const [form, setForm] = useState<IFormInterface>({
    name: "",
    nickname: "",
    email: "",
    city: "",
    phone: "",
    company: "",
  });

  useEffect(() => {
    setForm({
      name: data && data.name,
      nickname: "rettake",
      email: data && data.email,
      city: data && data.address.city,
      phone: data && data.phone,
      company: data && data.company.name,
    });
  }, [data]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleClick = (elementId: string) => {
    setActiveElement(elementId);
  };

  return (
    <section className="w-full max-w-[1192px] px-4 mx-auto mt-[50px] lg:mt-[56px] md:mt-[96px] mb-10 md:mb-[198px] flex flex-col gap-5 lg:gap-6">
      <div
        onClick={() => navigate("/")}
        className="py-5 max-w-[120px] flex items-center gap-2 cursor-pointer"
      >
        <UiBackArrowIcon />
        <span className="text-second-color headline">Назад</span>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="w-full bg-sixth-color rounded-2xl flex flex-col basis-2/4 p-7 lg:p-10 gap-6 lg:gap-10">
          <img
            src={require("../../../assets/images/me.png")}
            alt="avatar"
            className="rounded-lg w-full max-h-[187px] md:max-h-[300px] lg:max-h-[485px] object-cover"
          />
          <div className="flex flex-col gap-5 lg:gap-6">
            <Category
              title="Данные профиля"
              onClick={() => handleClick("Element1")}
              active={activeElement === "Element1"}
            />
            <Category
              title="Рабочее пространство"
              onClick={() => handleClick("Element2")}
              active={activeElement === "Element2"}
            />
            <Category
              title="Приватность"
              onClick={() => handleClick("Element3")}
              active={activeElement === "Element3"}
            />
            <Category
              title="Безопасность"
              onClick={() => handleClick("Element4")}
              active={activeElement === "Element4"}
            />
          </div>
        </div>
        <div className="w-full bg-sixth-color rounded-2xl flex flex-col p-7 lg:p-10 gap-5 lg:gap-6">
          <div className="w-full border-b-[1px] border-b-fourth-color pb-4">
            <h2 className="title">Данные профиля</h2>
          </div>
          <div className="flex flex-col gap-6 lg:gap-8">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 lg:gap-6 w-full lg:w-[60%]"
            >
              <UiTextField
                label="Имя"
                inputProps={{
                  type: "text",
                  required: true,
                  value: form.name,
                  onChange: (e) => setForm({ ...form, name: e.target.value }),
                }}
              />
              <UiTextField
                label="Никнейм"
                inputProps={{
                  type: "text",
                  required: true,
                  value: form.nickname,
                  onChange: (e) =>
                    setForm({ ...form, nickname: e.target.value }),
                }}
              />
              <UiTextField
                label="Почта"
                inputProps={{
                  type: "email",
                  required: true,
                  value: form.email,
                  onChange: (e) => setForm({ ...form, email: e.target.value }),
                }}
              />
              <UiTextField
                label="Город"
                inputProps={{
                  type: "text",
                  required: true,
                  value: form.city,
                  onChange: (e) => setForm({ ...form, city: e.target.value }),
                }}
              />
              <UiTextField
                label="Телефон"
                inputProps={{
                  type: "tel",
                  required: true,
                  value: form.phone,
                  onChange: (e) => setForm({ ...form, phone: e.target.value }),
                }}
              />
              <UiTextField
                label="Название компании"
                inputProps={{
                  type: "text",
                  required: true,
                  value: form?.company,
                  onChange: (e) =>
                    setForm({ ...form, company: e.target.value }),
                }}
              />
              <UiButton type="submit" className="w-full lg:max-w-[170px]">
                Сохранить
              </UiButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
