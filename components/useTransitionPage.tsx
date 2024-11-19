"use client";
import React, { useState, useTransition } from "react";
import Loader from "./Loader";

const TestPage = () => {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState("about");

  function selectTab(nextTab: string) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        {isPending && <Loader />}
        {!isPending && (
          <div className="flex flex-row gap-4">
            <button
              disabled={tab === "about"}
              onClick={() => selectTab("about")}
              className={` text-white rounded-lg px-4 py-3 hover:opacity-80 duration-200 ${
                tab === "about" ? "bg-blue-500" : "bg-red-500"
              }`}
            >
              About
            </button>
            <button
              disabled={tab === "posts"}
              onClick={() => selectTab("posts")}
              className={` text-white rounded-lg px-4 py-3 hover:opacity-80 duration-200 ${
                tab === "posts" ? "bg-blue-500" : "bg-red-500"
              }`}
            >
              Posts (slow)
            </button>
            <button
              disabled={tab === "contact"}
              onClick={() => selectTab("contact")}
              className={` text-white rounded-lg px-4 py-3 hover:opacity-80 duration-200 ${
                tab === "contact" ? "bg-blue-500" : "bg-red-500"
              }`}
            >
              Contact
            </button>
            <hr />
          </div>
        )}
      </div>
    </>
  );
};

export default TestPage;
