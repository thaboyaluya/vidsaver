import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoadingScreen from "./screens/LoadingScreen";
const HomeScreen = lazy(() => import("./screens/HomeScreen"))
const NotFoundScreen = lazy(() => import("./screens/NotFoundScreen"))
const FacebookScreen = lazy(() => import("./screens/FacebookScreen"))
const InstagramScreen = lazy(() => import("./screens/InstagramScreen"))
const TiktokScreen = lazy(() => import("./screens/TiktokScreen"))



function App() {


  return (
    <div>
      <Routes>
        <Route index path="/" element={
          <Suspense fallback={<LoadingScreen />}>
            <HomeScreen />
          </Suspense>} />
        <Route path="/instagram-video-to-mp4" element={
          <Suspense fallback={<LoadingScreen />}>
            <InstagramScreen />
          </Suspense>} />
        <Route path="/tiktok-video-to-mp4" element={
          <Suspense fallback={<LoadingScreen />}>
            <TiktokScreen />
          </Suspense>} />
        <Route path="/facebook-video-to-mp4" element={
          <Suspense fallback={<LoadingScreen />}>
            <FacebookScreen />
          </Suspense>} />
        <Route path="*" element={
          <Suspense fallback={<LoadingScreen />}>
            <NotFoundScreen />
          </Suspense>} />
      </Routes>

    </div>






  );
}

export default App;
