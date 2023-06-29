// Path: stata-parser/index.d.ts

export enum StataValueType {
  INT8 = 251,
  INT16 = 252,
  INT32 = 253,
  FLOAT32 = 254,
  DOUBLE = 255,
}

// String format for each type of variable
// https://www.stata.com/help.cgi?format
export enum DefaultFormat {
  INT8 = "%8.0g",
  INT16 = "%8.0g",
  INT32 = "%12.0g",
  INT64 = "%9.0g",
  FLOAT32 = "%9.0g",
  FLOAT64 = "%10.0g",
  STRL = "%9s",
}

export type StataDataValue = string | number | null;

export type StataData = {
  data: any[][];
  metadata: {
    timestamp: string;
    observations: number;
    variables: number;
    datalabel: string;
    version: number;
    nlabels: number;
  };
  variables: {
    vfmt: string;
    name: string;
    dlabels: string;
    vlabels: string;
    valueType: StataValueType | number;
  }[];
  labels: {
    [key: string]: [number, string][];
  };
};

export declare function read(filename: string): any;

export declare function write(filename: string, data: StataData): void;
