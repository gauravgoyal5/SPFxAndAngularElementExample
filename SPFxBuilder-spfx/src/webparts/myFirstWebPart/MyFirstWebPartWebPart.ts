import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import {SPComponentLoader} from '@microsoft/sp-loader';

import * as strings from 'MyFirstWebPartWebPartStrings';

import 'spfx-builder/dist/SPFxBuilder/bundle';

export interface IMyFirstWebPartWebPartProps {
  description: string;
}

export default class MyFirstWebPartWebPart extends BaseClientSideWebPart<IMyFirstWebPartWebPartProps> {

  public render(): void {
    let cssURL = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
   SPComponentLoader.loadCss(cssURL);
    this.domElement.innerHTML = `
      <app-my-first-web-part-web-part description="${ this.properties.description }"></app-my-first-web-part-web-part>
      <br/>
      <app-sampleform></app-sampleform>
      <br/>
      <app-my-profile ></app-my-profile>
      `;
      window["ctxnew2"]=this.context;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
