import { useSelector } from "react-redux";
import { useGetAllUsersQuery } from "../../../app/api/users";
import { UiLoader } from "../../../shared/ui/UiLoader";
import { EmployeeCard } from "./employee-card";
import { RootState } from "../../../app/store";

export function EmployeesSection() {
  const { data, isLoading } = useGetAllUsersQuery();

  const { users } = useSelector((state: RootState) => state.users);
  const { archivedUsers } = useSelector((state: RootState) => state.archivedUsers);

  console.log(data);

  return (
    <section className="w-full max-w-[1192px] px-4 mx-auto mt-[82px] md:mt-[96px] mb-10 md:mb-[198px] flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col items-start gap-4 md:gap-7">
        <div className="w-full border-b-[1px] border-b-fourth-color pb-4">
          <h2 className="title">Активные</h2>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-y-10 md:gap-x-8">
          {isLoading ? (
            <UiLoader />
          ) : (
            users.map((item) => (
              <EmployeeCard
                archived={false}
                key={item.id}
                id={item.id}
                name={item.name}
                company={item.company.name}
                city={item.address.city}
              />
            ))
          )}
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 md:gap-7">
        <div className="w-full border-b-[1px] border-b-fourth-color pb-4">
          <h2 className="title">Архив</h2>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-y-10 md:gap-x-8">
          {isLoading ? (
            <UiLoader />
          ) : (
            archivedUsers?.map((item) => (
              <EmployeeCard
                archived={true}
                key={item.id}
                id={item.id}
                name={item.name}
                company={item.company.name}
                city={item.address.city}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
