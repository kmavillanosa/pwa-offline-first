import { Layout, Page } from "@/shared/components";
import CachePlayer from "./CachePlayer";

const CacheRequestPage: React.FC = () => {
    return (
        <Page title="Cache Request">
            <Layout>
                <CachePlayer />
            </Layout>
        </Page>
    );
};

export default CacheRequestPage;
