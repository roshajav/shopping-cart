import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../styles/TabComponent.css";

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleEditorNoteClick = () => {
    const editorNoteElement = document.getElementById("editor-note");
    if (editorNoteElement) {
      editorNoteElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky-left">
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          color: "black",
          paddingLeft: "0",
          "& .MuiTabs-scroller": {
            overflow: "visible",
          },
        }}
      >
        <Tab
          label="Details"
          sx={{ paddingRight: "16px", color: "black", fontFamily: 500 }}
        />
        <Tab
          label="Delivery"
          disabled
          style={{ opacity: 0.5, pointerEvents: "none" }}
          sx={{ paddingRight: "16px" }}
        />
        <Tab
          label="Fit"
          disabled
          style={{ opacity: 0.5, pointerEvents: "none" }}
          sx={{ paddingRight: "16px" }}
        />
        <Tab
          label="Share"
          disabled
          style={{ opacity: 0.5, pointerEvents: "none" }}
        />
      </Tabs>
      <div className="tabs-bottom-text">
        The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
        lavishness by night and by day: a blazer in a linen blend shot with
        lurex for a shimmering surface that shines like a star in the sky.
        <br />
        <br />
        <a
          href="#editor-note"
          className="editor-note-link"
          style={{
            textDecoration: "underline",
            color: "black",
            cursor: "pointer",
          }}
          onClick={handleEditorNoteClick}
        >
          See the EDITOR’S NOTE
        </a>
        <br />
        <br />
        <strong>Learn about the DESIGNER</strong>
      </div>
    </div>
  );
};

export default TabComponent;
