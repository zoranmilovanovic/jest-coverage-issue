import { createElement } from 'lwc';
import TestComp from 'c/testComp';
import getCustomSettings from "@salesforce/apex/ApexContoller.getCustomSettings";

// Mock getCustomSettings method
jest.mock(
    "@salesforce/apex/ApexContoller.getCustomSettings",
    () => {
      const { createApexTestWireAdapter } = require("@salesforce/sfdx-lwc-jest");
      return {
        default: createApexTestWireAdapter(jest.fn())
      };
    },
    { virtual: true }
  );

describe('c-test-comp', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Getter for settings', () => {
        // Arrange
        const element = createElement('c-test-comp', {
            is: TestComp
        });

        // Act
        document.body.appendChild(element);
        let json = {
          "data": 123
        }
        getCustomSettings.emit(json);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(element.getSettings).toBe(json);
    });
});