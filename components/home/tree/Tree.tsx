import React from "react";
import classes from "./Tree.module.scss";

type specificationType = {
  htrunk: string;
  wtrunk: string;
  shadetrunk: string;
  hleaf: string;
  wleaf: string;
  shadeleaf: string;
  right: string;
  index: string;
};

const Tree: React.FC<specificationType> = ({
  htrunk,
  wtrunk,
  shadetrunk,
  hleaf,
  wleaf,
  shadeleaf,
  right,
  index,
}) => {
  return (
    <div className={classes.tree} style={{ right: right }}>
      <div
        className={classes.leaf}
        style={{
          height: hleaf,
          width: wleaf,
          zIndex: index,
          background: `linear-gradient(120deg, ${shadeleaf}, rgb(17, 82, 26))`,
        }}
      />
      <div
        className={classes.trunk}
        style={{
          height: htrunk,
          width: wtrunk,
          backgroundColor: shadetrunk,
          background: `linear-gradient(90deg, ${shadetrunk}, rgb(49, 19, 11))`,
        }}
      />
    </div>
  );
};

export default Tree;
