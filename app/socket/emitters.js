import {socket} from './listeners';
import {browserHistory} from 'react-router';

const formatLineItem = (lineItem) => {
  return {
    grouped: {
      general: [
        {label: "Line Item Name", value: lineItem.lineItemName || "–", selector: "lineItemName"},
        {label: "Impression Budget", value: lineItem.impressionBudget || "–", selector: "impressionBudget"},
        {label: "Start Date", value: lineItem.startDate || "–", selector: "startDate"},
        {label: "Start Time", value: lineItem.startTime || "–", selector: "startTime"},
        {label: "End Date", value: lineItem.endDate || "–", selector: "endDate"},
        {label: "End Time", value: lineItem.endTime || "–", selector: "endTime"},
        {label: "Distribute Impressions", value: lineItem.distributeImpressions || "–", selector: "distributeImpressions"},
      ],
      creatives: [
        {label: "Creative Name", value: lineItem.creativeName || "–", selector: "creativeName"},
        {label: "Creative Type", value: lineItem.creativeType || "–", selector: "creativeType"},
        {label: "Domain Of Advertiser", value: lineItem.domainOfAdvertiser || "–", selector: "domainOfAdvertiser"},
        {label: "Click Url", value: lineItem.clickUrl || "–", selector: "clickUrl"},
        {label: "Pixel Url", value: lineItem.pixelUrl || "–", selector: "pixelUrl"},
      ],
      profile: [
        {label: "Gender", value: lineItem.gender || "–", selector: "gender"},
        {label: "Age", value: lineItem.age || "–", selector: "age"},
        {label: "Inventory Type", value: lineItem.inventoryType || "–", selector: "inventoryType"},
        {label: "Device Type", value: lineItem.deviceType || "–", selector: "deviceType"},
        {label: "Operating System", value: lineItem.operatingSystem || "–", selector: "operatingSystem"},
        {label: "Mobile Carrier", value: lineItem.mobileCarrier || "–", selector: "mobileCarrier"},
        {label: "Include IAB", value: lineItem.includeIAB || "–", selector: "includeIAB"},
      ],
      geo: [
        {label: "Include Countries", value: lineItem.includeCountries || "–", selector: "includeCountries"},
        {label: "Include States", value: lineItem.includeStates || "–", selector: "includeStates"},
        {label: "Inlude Locations", value: lineItem.includeLocations || "–", selector: "includeLocations"},
        {label: "Include Zip Codes", value: lineItem.includeZipCodes || "–", selector: "includeZipCodes"},
      ],
      notes: [
        {label: "Reporting Requirements", value: lineItem.reporting || "–", selector: "reporting"},
        {label: "Key Performance Indicators", value: lineItem.kpi || "–", selector: "kpi"},
        {label: "Miscellaneous", value: lineItem.misc || "–", selector: "misc"},
      ],
      timestamp: lineItem.timestamp
    },
    raw: lineItem
  }
}

export const formSubmit = (formData, campaign) => {
  var dataToSave;
  if(formData) {
    if (formData.campaignForm && Object.keys(formData.campaignForm).length !== 0 && !formData.campaignForm.submitSucceeded) {
      dataToSave = {campaignName: formData.campaignForm.values.campaignName, status: 'Pending', lineItems: []}
      socket.emit('submit-campaign-form', dataToSave);
      browserHistory.push('/add');
    } else if (formData.lineItemForm && Object.keys(formData.lineItemForm).length !== 0) {
      formData.lineItemForm.values['timestamp'] = Date.now();
      var lineItem = formData.lineItemForm.values;
      dataToSave = {
        ...campaign,
        lineItems: [
          ...campaign.lineItems,
          formatLineItem(lineItem)
        ]
      }
      socket.emit('submit-lineitem-form', dataToSave);
      browserHistory.push('/' + dataToSave.id);
    }
  }
}

export const lineItemSubmit = (campaign, formData, index) => {
  formData.values['timestamp'] = Date.now();
  let dataToSave = {
    ...campaign,
    lineItems: [
      ...campaign.lineItems.slice(0, index),
      formatLineItem(formData.values),
      ...campaign.lineItems.slice(index+1)
    ]
  }
  socket.emit('submit-lineitem-form', dataToSave);
}

export default {
  formSubmit: formSubmit,
  lineItemSubmit: lineItemSubmit
}