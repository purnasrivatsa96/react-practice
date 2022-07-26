import React, { useState } from "react";
import { Logger } from "logging-library";
import FileViewer from "react-file-viewer";
import { CustomErrorComponent } from "custom-error";

// const file = "/logo192.png";
// const type = "png";
const file = "sample.pdf";
const type = "pdf";
// const file = "excel.xlsx";
// const type = "xlsx";
// const file = "proposal.docx";
// const type = "docx";
// const file = "new_user_credentials.csv";
// const type = "csv";

const App = () => {
  const [view, setView] = useState(false);

  const handleView = () => {
    setView(!view);
  };

  const onError = (e) => {
    Logger.logError(e, "error in file-viewer");
  };

  return (
    <>
      <button onClick={handleView}>View</button>
      {view && (
        <div key={Math.random()}>
        <FileViewer
          fileType={type}
          filePath={file}
          errorComponent={CustomErrorComponent}
          onError={onError}
        />
        </div>
      )}
    </>
  );
};

export default App;
