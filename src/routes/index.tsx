import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Segment: any = lazy(() => import("../pages/segment"));
const Loading = lazy(() => import("../components/Loader"));
const Layout = lazy(() => import("../layouts/AppLayout"));

const index = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Segment />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default index;
