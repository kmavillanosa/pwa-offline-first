import { Page, Layout } from "@/shared/components";
import ProfileForm from "./ProfileForm";
import { useRouter } from "next/router";

const UpdateProfilePage: React.FC = () => {
  const router = useRouter();

  const { id } = router.query;
  const actualId = parseInt(id as string);

  return (
    <Page title="Update Page">
      <Layout>
        <ProfileForm id={actualId} />
      </Layout>
    </Page>
  );
};

export default UpdateProfilePage;
