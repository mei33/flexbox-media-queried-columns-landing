import React from "react";

import prettier from "prettier";
import parserPostCss from "prettier/parser-postcss";
import {
  getMediaQueriedColumnsCssFunc,
  MediaQueriesDict,
} from "@mei33/flexbox-media-queried-columns";
import "@jetbrains/ring-ui/dist/style.css";
import Alert from "@jetbrains/ring-ui/dist/alert/alert";
import Code from "@jetbrains/ring-ui/dist/code/code";
import Text from "@jetbrains/ring-ui/dist/text/text";

import { getRandomColor } from "./utils/getRandomColor";
import "./App.css";

const INITIAL_CSS_CLASS_NAME = "class";
const INITIAL_MEDIA_QUERIES = {
  500: 5,
  600: 6,
  700: 7,
};

function App() {
  const [mediaQueries, setMediaQueries] = React.useState<MediaQueriesDict>(
    INITIAL_MEDIA_QUERIES
  );
  const [itemsOnScreen, setItemsOnScreen] = React.useState(
    Math.max(...Object.values(mediaQueries)) * 2
  );
  const [gap, setGap] = React.useState(40);
  const [cssClassName, setCssClassName] = React.useState(
    INITIAL_CSS_CLASS_NAME
  );

  const [isCopiedNotifierVisible, setIsCopiedNotifierVisible] =
    React.useState(false);
  const [isCopiedNotifierClosing, setIsCopiedNotifierClosing] =
    React.useState(false);

  const width = getMediaQueriedColumnsCssFunc({ mediaQueries, gap });

  const handleBreakpointsListChange = (
    breakpointOld: keyof MediaQueriesDict,
    breakpointUpdated: keyof MediaQueriesDict
  ) => {
    setMediaQueries((prevState) => {
      const columnsInCurrentBreakpoint = prevState[breakpointOld];
      const { [breakpointOld]: _, ...otherBreakpoints } = prevState;

      return {
        ...otherBreakpoints,
        [breakpointUpdated]: columnsInCurrentBreakpoint,
      };
    });
  };

  const handleColumnsInBreakpointChange = (
    breakpoint: number,
    columns: number
  ) => {
    setMediaQueries((prevState) => ({
      ...prevState,
      [breakpoint]: columns,
    }));
  };

  const handleAddMoreBreakpointsClick = () => {
    setMediaQueries((prevState) => {
      const maxBreakpoint = Math.max(...Object.keys(prevState).map(Number));

      return {
        ...prevState,
        [Math.floor(maxBreakpoint * 1.1)]: prevState[maxBreakpoint] + 1,
      };
    });
  };

  const handleCopyClampFuncClick = () => {
    void navigator.clipboard.writeText(width);
    setIsCopiedNotifierVisible(true);

    setTimeout(() => {
      setIsCopiedNotifierClosing(true);
    }, 2000);
  };

  React.useEffect(() => {
    if (isCopiedNotifierClosing) {
      setTimeout(() => {
        setIsCopiedNotifierVisible(false);
      }, 2000);
    }
  }, [isCopiedNotifierClosing]);

  React.useEffect(() => {
    if (!isCopiedNotifierVisible) {
      setIsCopiedNotifierClosing(false);
    }
  }, [isCopiedNotifierVisible]);

  const renderCode = () => {
    const classNameToDisplay = cssClassName || INITIAL_CSS_CLASS_NAME;
    const code = `
      .${classNameToDisplay}: {
        --column-width: ${width};
      
        display: flex;
        flex-wrap: wrap;
        gap: ${gap}px;
      }
      
      .${classNameToDisplay}-inner: {
        flex: var(--column-width);
        max-width: var(--column-width);
      }
    `;

    return prettier.format(code, {
      parser: "css",
      plugins: [parserPostCss],
    });
  };

  const items = new Array(itemsOnScreen);
  for (let i = 0; i < itemsOnScreen; ++i) {
    items[i] = (
      <div
        className="App__column"
        style={
          {
            "--bgColor": getRandomColor(),
          } as React.CSSProperties
        }
      />
    );
  }

  return (
    <div className="App">
      {isCopiedNotifierVisible && (
        <Alert
          className="Alert"
          closeable={false}
          isClosing={isCopiedNotifierClosing}
          showWithAnimation
          type={Alert.Type.SUCCESS}
        >
          Copied!
        </Alert>
      )}

      <div className="App__intro">
        <h1>
          <Text>Flexbox media queried columns</Text>
        </h1>
        <p>
          <Text>
            Wouldn't it be nice to define media queries in your CSS-in-JS with
            only one function? If your answer if 'yes' you might be interested
            in{" "}
            <a
              href="https://css-tricks.com/responsive-layouts-fewer-media-queries/"
              target="_blank"
            >
              Responsive Layouts, Fewer Media Queries article
            </a>{" "}
            of <a href="https://css-only.art/">Temani Afif</a>. This landing
            allows you to generate your custom rule with{" "}
            <a href="https://github.com/mei33/flexbox-media-queried-columns">
              flexbox-media-queried-columns library
            </a>
          </Text>
        </p>
      </div>
      <form className="App__form">
        <div className="Form__group">
          <label>
            CSS class
            <input
              className="Form__inputLabelled"
              type="string"
              name="css-class"
              value={cssClassName}
              onChange={({ target }) => setCssClassName(target.value)}
            />
          </label>
        </div>
        <div className="Form__group">
          <label>
            Gap
            <input
              className="Form__inputLabelled Form__inputNumber"
              type="number"
              name="gap"
              value={gap}
              onChange={({ target }) => setGap(Number(target.value))}
            />
          </label>
        </div>

        <div className="Form__group Form__spaced">
          <button
            type="button"
            onClick={() => setItemsOnScreen((prevState) => prevState + 1)}
          >
            More items
          </button>
          <button
            type="button"
            onClick={() => setItemsOnScreen((prevState) => prevState - 1)}
          >
            Less items
          </button>
        </div>

        <fieldset>
          <div className="Form__group">
            {Object.entries(mediaQueries).map(
              ([breakpoint, columns], index) => (
                <fieldset className="Form__group" key={index}>
                  <label className="Form__spaced">
                    <input
                      className="Form__inputNumber"
                      type="number"
                      value={breakpoint}
                      onChange={({ target }) =>
                        handleBreakpointsListChange(
                          Number(breakpoint),
                          Number(target.value)
                        )
                      }
                    />
                    <input
                      className="Form__inputNumber"
                      type="number"
                      value={columns}
                      onChange={({ target }) =>
                        handleColumnsInBreakpointChange(
                          Number(breakpoint),
                          Number(target.value)
                        )
                      }
                    />
                  </label>
                </fieldset>
              )
            )}
          </div>
          <button
            className="Form__buttonMain"
            type="button"
            onClick={handleAddMoreBreakpointsClick}
          >
            Add more breakpoints
          </button>
        </fieldset>
      </form>

      <div className="App__code">
        <Code code={renderCode()} language="css" />
        <div className="App__actions">
          <button
            disabled={isCopiedNotifierVisible}
            onClick={handleCopyClampFuncClick}
          >
            Copy clamp function
          </button>
        </div>
      </div>

      <div
        className="App__columns"
        style={{ "--gap": `${gap}px` } as React.CSSProperties}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              flex: width,
              maxWidth: width,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
