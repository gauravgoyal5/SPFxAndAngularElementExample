declare interface IGreetingWpWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'GreetingWpWebPartStrings' {
  const strings: IGreetingWpWebPartStrings;
  export = strings;
}
