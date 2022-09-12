import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FullLayout from "./views/components/full-layout/full-layout.component";
import Home from "./views/pages/home/home.component";
import MemberList from "./views/pages/member-list/member-list.component";
import MemberDetail from "./views/pages/member-detail/member-detail.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullLayout />}>
          <Route index element={<Home />} />
          <Route path="member-list" element={<MemberList />} />
          <Route path="member-detail" element={<MemberDetail />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
