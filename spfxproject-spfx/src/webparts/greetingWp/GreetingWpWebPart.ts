
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { SPComponentLoader } from '@microsoft/sp-loader';
import {
  Environment,
  EnvironmentType,Version
} from '@microsoft/sp-core-library';
import * as strings from 'GreetingWpWebPartStrings';

import 'spfxproject/dist/spfxproject/bundle.js';

export interface IGreetingWpWebPartProps {
  description: string;
}

export default class GreetingWpWebPart extends BaseClientSideWebPart<IGreetingWpWebPartProps> {


  public constructor() {
    super();
    //Modify with your a CDN or local path
    SPComponentLoader.loadCss('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');
  }

  public render(): void {
    let env=(Environment.type==EnvironmentType.ClassicSharePoint || Environment.type==EnvironmentType.SharePoint) ? true : false;
    console.log(env);
        this.domElement.innerHTML = `<app-greeting-wp-web-part issharepoint=${env} ></app-greeting-wp-web-part>`;
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
