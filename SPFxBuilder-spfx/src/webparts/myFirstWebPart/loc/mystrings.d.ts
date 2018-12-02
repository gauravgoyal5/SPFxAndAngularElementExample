declare interface IMyFirstWebPartWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'MyFirstWebPartWebPartStrings' {
  const strings: IMyFirstWebPartWebPartStrings;
  export = strings;
}
