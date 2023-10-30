import { FormEvent, useEffect, useState } from "react";
import { UiTextField } from "../../../../../shared/ui/UiTextField";
import { useParams } from "react-router";
import { useGetUserByIdQuery } from "../../../../../app/api/users";
import { UiButton } from "../../../../../shared/ui/UiButton";

export function ProfileForm({
  handleSubmit,
}: {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  interface IFormInterface {
    name: string;
    nickname: string;
    email: string;
    city: string;
    phone: string;
    company: string;
  }

  const { id } = useParams();
  const { data } = useGetUserByIdQuery(String(id));

  const [form, setForm] = useState<IFormInterface>({
    name: "",
    nickname: "",
    email: "",
    city: "",
    phone: "",
    company: "",
  });

  useEffect(() => {
    if (data)
      setForm({
        name: data.name,
        nickname: "rettake",
        email: data.email,
        city: data.address.city,
        phone: data.phone,
        company: data.company.name,
      });
  }, [data]);

  return (
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
          onChange: (e) => setForm({ ...form, nickname: e.target.value }),
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
          onChange: (e) => setForm({ ...form, company: e.target.value }),
        }}
      />
      <UiButton type="submit" className="w-full lg:max-w-[170px]">
        Сохранить
      </UiButton>
    </form>
  );
}
