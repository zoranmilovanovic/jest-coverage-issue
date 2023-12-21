/**
 * This comment is treated as function/branch
 */
import { LightningElement, wire, api } from 'lwc';
import getCustomSettings from "@salesforce/apex/ApexContoller.getCustomSettings";

export default class TestComp extends LightningElement {

    settings = {};

    @api get getSettings() {
        return this.settings;
    };

    @wire(getCustomSettings, {})
    myCustomSettingsWire({ data }) {
        this.settings = data;
    }
}