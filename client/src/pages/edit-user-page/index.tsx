import { Layout } from "../../shared/ui/layout";
import { useState } from "react";
import { UserInfoSection } from "./user-info-section";
import { SuccessModal } from "./success-modal";

export function EditUserPage() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Layout>
      <UserInfoSection setShowModal={setShowModal} />
      {showModal && (
        <SuccessModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </Layout>
  );
}
