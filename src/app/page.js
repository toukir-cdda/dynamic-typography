"use client";
import TyphographyContainer from "@/components/TyphographyContainer";
import { TyphographyProvider } from "@/context/typography.context";
import dynamic from "next/dynamic";
const HeadingTags = dynamic(() => import("../components/HeadingTags"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const typographyComponentData = [
    {
      id: "1",
      tag: "div",
      componentType: "parent",
      styles: { backgroundColor: "lightgray" },
    },
    {
      id: "2",
      tag: "h1",
      componentType: "child",
      styles: { color: "blue" },
      parentId: "1",
      content: "hello h1",
    },
    {
      id: "3",
      tag: "h2",
      componentType: "child",
      styles: {},
      parentId: "1",
      content: "hello h2",
    },
    {
      id: "4",
      tag: "h3",
      componentType: "child",
      styles: {},
      parentId: "1",
      content: "hello h3",
    },
    {
      id: "5",
      tag: "h4",
      componentType: "child",
      styles: {},
      parentId: "1",
      content: "hello h4",
    },
    {
      id: "6",
      tag: "h5",
      componentType: "child",
      styles: {},
      parentId: "1",
      content: "hello h5",
    },
    {
      id: "7",
      tag: "h6",
      componentType: "child",
      styles: {},
      parentId: "1",
      content: "hello h6",
    },
    {
      id: "8",
      tag: "div",
      componentType: "parent",
      styles: {
        backgroundColor: "gray",
        display: "flex",
      },
      // content: "hello div",
    },
    {
      id: "9",
      tag: "span",
      componentType: "child",
      styles: {},
      content: "child span",
      parentId: "8",
    },
    {
      id: "10",
      tag: "div",
      componentType: "parent",
      styles: {
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      },
      // content: "child nested parent div",
    },
    {
      id: "11",
      tag: "span",
      componentType: "child",
      styles: { backgroundColor: "skyblue", width: "100%" },
      content: "child nested child span",
      parentId: "10",
    },
    {
      id: "12",
      tag: "span",
      componentType: "child",
      styles: { backgroundColor: "skyblue", width: "100%" },
      content: "child nested child span",
      parentId: "10",
    },
  ];

  return (
    <TyphographyProvider>
      <TyphographyContainer componentData={typographyComponentData} />
    </TyphographyProvider>
  );
}
