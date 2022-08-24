import React from 'react';
import { data } from '@ausuliv/react-log-viewer-docs-test/src/LogViewer/examples/realTestData';
import { LogViewer, LogViewerSearch } from '@ausuliv/react-log-viewer-docs-test';
import { Toolbar, ToolbarContent, ToolbarItem, Button, Checkbox } from '@patternfly/react-core';

CustomControlLogViewer = () => {
  const [isTextWrapped, setIsTextWrapped] = React.useState(false);
  const onActionClick = event => {
    console.log('clicked test action button');
  };

  const onPrintClick = event => {
    console.log('clicked console print button');
  };

  return (
    <LogViewer
      data={data.data}
      isTextWrapped={isTextWrapped}
      toolbar={
        <Toolbar>
          <ToolbarContent>
            <ToolbarItem>
              <Button onClick={onActionClick} variant="control">
                Test Action
              </Button>
            </ToolbarItem>
            <ToolbarItem>
              <LogViewerSearch placeholder="Search" />
            </ToolbarItem>
            <ToolbarItem>
              <Button onClick={onPrintClick} variant="control">
                Print to Console
              </Button>
            </ToolbarItem>
            <ToolbarItem>
              <Checkbox label="Wrap text" aria-label="wrap text checkbox" isChecked={isTextWrapped} id="wrap-text-checkbox" onChange={setIsTextWrapped} />
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      }
    />
  );
};