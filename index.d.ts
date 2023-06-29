// Path: stata-parser/index.d.ts

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
    valueType: number;
  }[];
  labels: {
    [key: string]: [number, string][];
  };
};

export declare function read(filename: string): any;

export declare function write(filename: string, data: StataData): void;
