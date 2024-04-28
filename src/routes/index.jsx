import React from "react";
import { Route, Routes } from "react-router-dom";
import NestedComments from "../components/NestedComments";
import ProgressBar from "../components/ProgressBar";
import InfiniteScroll from "../components/InfiniteScroll";
import HOCExample from "../components/HOCExample";
import Pagination from "../components/Pagination";
import AutoCompleteSearch from "../components/AutoCompleteSearch/AutoCompleteSearch";
import StarRating from "../components/StarRating/StarRating";
import IntersectionObserver from "../components/IntersectionObserver/IntersectionObserver";

function Index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NestedComments />} />
        <Route path="/progress" element={<ProgressBar />} />
        <Route path="/scroll" element={<InfiniteScroll />} />
        <Route path="/hoc" element={<HOCExample />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/search" element={<AutoCompleteSearch />} />
        <Route path="/star" element={<StarRating />} />
        <Route path="/lazyload" element={<IntersectionObserver />} />
      </Routes>
    </>
  );
}

export default Index;
