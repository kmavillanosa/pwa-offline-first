import { Layout, Page } from "@/shared/components";
import ProfileForm from "./ProfileForm";

const CreateProfilePage: React.FC = () => {
  return (
    <Page title="Create Profile">
      <Layout>
        <ProfileForm />
      </Layout>
    </Page>
  );
};

export default CreateProfilePage;
