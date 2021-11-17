(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9708],{37127:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return s}});var a=t(22122),d=t(19756),r=(t(15007),t(64983)),i=t(99536),m=["components"],l={},o={_frontmatter:l},p=i.Z;function s(e){var n=e.components,t=(0,d.Z)(e,m);return(0,r.mdx)(p,(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"json-body-reference"},"JSON body reference"),(0,r.mdx)("p",null,"A JSON request body is required when creating a Data Repair API job. This page provides a full list of variables, actions, and filters that you can include to create a valid JSON request body."),(0,r.mdx)("h2",{id:"structure"},"Structure"),(0,r.mdx)("p",null,"A request body consists of one or more variables with the desired action for each variable. You can also optionally include a filter for a given variable."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "{VARIABLE_1}": {\n      "action": "{ACTION_1}",\n      "filter": {"condition":  "{CONDITION_1}"}\n    },\n    "{VARIABLE_2}": {\n      "action": "{ACTION_2}"\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"variables"},"Variables"),(0,r.mdx)("p",null,"The Data Repair API supports the following variables, with their supported actions."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Variable"),(0,r.mdx)("th",{parentName:"tr",align:null},"Supported actions"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"campaign")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"delete"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/tracking-code.html"},"Tracking code")," dimension. Only tracking codes with an ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/conversion-variables/conversion-var-admin.html"},"expiration")," of page view, visit, or time period of 1 day or shorter are supported with this API. A data repair job fails if it includes this variable with an expiration of a time period greater than 1 day or on an event. As a best practice, Adobe recommends ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/conversion-variables/conversion-var-admin.html"},"resetting")," the tracking code before a repair job so values persisted by visitors do not reappear after a repair job is complete.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"entrypage")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"delete"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/entry-dimensions.html"},"Entry page")," dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"sitesections")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"delete"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/site-section.html"},"Site section")," dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"geodma")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/us-dma.html"},"US DMA")," dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"geocity")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/cities.html"},"Cities")," dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"geocountry")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/countries.html"},"Countries")," dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"geolatitude")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"N/A")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"geolongitude")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"N/A")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"georegion")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/regions.html"},"Regions")," dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"geozip")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/zip-code.html"},"Zip code")," dimension collected through geolocation. See also ",(0,r.mdx)("inlineCode",{parentName:"td"},"zip"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"ipaddress")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The IP address of the visitor.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"latitude")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"N/A")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"longitude")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"N/A")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"zip")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/zip-code.html"},"Zip code")," dimension collected through the ",(0,r.mdx)("inlineCode",{parentName:"td"},"zip")," variable (not geosegmentation). See also ",(0,r.mdx)("inlineCode",{parentName:"td"},"geozip"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"page")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/page.html"},"Page")," dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pageeventvar1")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/implementation/vars/config-vars/linkurl.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"linkURL"))," implementation variable.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pageeventvar2")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/download-link.html"},"Download link"),", ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/exit-link.html"},"Exit link"),", or ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/custom-link.html"},"Custom link")," dimension, depending on the type of link.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pageurl")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/page-url.html"},"Page URL")," dimension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"evar1")," - ",(0,r.mdx)("inlineCode",{parentName:"td"},"evar250")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"delete"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/evar.html"},"eVar")," dimensions. Only eVars with an ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/conversion-variables/conversion-var-admin.html"},"expiration")," of page view, visit, or time period of 1 day or shorter are supported with this API. A data repair job fails if it includes an eVar with an expiration of a time period greater than 1 day or on an event. As a best practice, Adobe recommends ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/admin/admin-tools/conversion-variables/conversion-var-admin.html"},"resetting")," the eVar in question before a repair job so values persisted by visitors do not reappear after a repair job is complete.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"prop1")," - ",(0,r.mdx)("inlineCode",{parentName:"td"},"prop75")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"delete"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/prop.html"},"Prop")," dimensions.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"mobileappid"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"mobilemessagebuttonname"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"mobilemessageid"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"mobilerelaunchcampaigncontent"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"mobilerelaunchcampaignmedium"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"mobilerelaunchcampaignsource"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"mobilerelaunchcampaignterm"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"mobilerelaunchcampaigntrackingcode")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"delete"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/mobile-dimensions.html"},"Mobile")," dimensions.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"activitymap")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},"Deletes all ",(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/analyze/activity-map/activitymap-reporting-analytics.html"},"Activity map")," data for the hit. Does not support filters, because it handles multiple dimensions.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"latlon1"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"latlon23"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"latlon45"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"mobileaction"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"pointofinterest"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"pointofinterestdistance")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/analytics/components/dimensions/mobile-dimensions.html"},"Mobile")," dimensions.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"videoadname"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoadplayername"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoadadvertiser"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoaudioalbum"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoaudioartist"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoaudioauthor"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoaudiolabel"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoaudiopublisher"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoaudiostation"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoadcampaign"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videochannel"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videocontenttype"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoepisode"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videofeedtype"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videomvpd"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoname"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videonetwork"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videopath"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoplayername"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoseason"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoshow"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoshowtype"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videostreamtype")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"delete"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/media-analytics/using/metrics-and-metadata/audio-video-parameters.html"},"Media Analytics")," dimensions.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"video"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"videoad")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://experienceleague.adobe.com/docs/media-analytics/using/metrics-and-metadata/audio-video-parameters.html"},"Media Analytics")," dimensions.")))),(0,r.mdx)("p",null,"latitude\nlongitude\ngeolatitude\ngeolongitude\npageurlfirsthit\npageurlvisitstart\nreferrerfirsthit\nreferrervisit"),(0,r.mdx)("h2",{id:"actions-option-1"},"Actions (option 1)"),(0,r.mdx)("p",null,"Each variable requires an action. Adobe supports the following actions, with their supported filters:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Action"),(0,r.mdx)("th",{parentName:"tr",align:null},"Supported filters"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"set")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"inList"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"isEmpty"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"isURL"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"isNotURL"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"startsWith"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"endsWith"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"contains")),(0,r.mdx)("td",{parentName:"tr",align:null},"Overwrites the variable to the value in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"setValue")," property. Include the ",(0,r.mdx)("inlineCode",{parentName:"td"},"setValue")," property alongside the ",(0,r.mdx)("inlineCode",{parentName:"td"},"action")," property inside the variable.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"delete")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"inList"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"isURL"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"isNotURL"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"startsWith"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"endsWith"),(0,r.mdx)("br",null),(0,r.mdx)("inlineCode",{parentName:"td"},"contains")),(0,r.mdx)("td",{parentName:"tr",align:null},"Clears the variable value.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryString")),(0,r.mdx)("td",{parentName:"tr",align:null},"None"),(0,r.mdx)("td",{parentName:"tr",align:null},"Remove the query string from a variable value. If the value does not appear to be a URL, no action is taken.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"deleteQueryStringParameters")),(0,r.mdx)("td",{parentName:"tr",align:null},"None"),(0,r.mdx)("td",{parentName:"tr",align:null},"Remove one or more query string parameters and their values from a variable based on the string array ",(0,r.mdx)("inlineCode",{parentName:"td"},"parameters"),". Include the string array ",(0,r.mdx)("inlineCode",{parentName:"td"},"parameters")," alongside the ",(0,r.mdx)("inlineCode",{parentName:"td"},"action")," property inside the variable. Up to 10 parameters are supported. If the value does not appear to be a URL, no action is taken.")))),(0,r.mdx)("p",null,"The following example body shows how to use each action in four different eVars:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "evar1": {\n      "action": "set",\n      "setValue": "New value"\n    },\n    "evar2": {\n      "action": "delete"\n    },\n    "evar3": {\n      "action": "deleteQueryString"\n    },\n    "evar4": {\n      "action": "deleteQueryStringParameters",\n      "parameters": ["param1", "param2"]\n    }\n  }\n}\n')),(0,r.mdx)("h2",{id:"actions-option-2"},"Actions (option 2)"),(0,r.mdx)("p",null,"Each variable requires an action. Adobe supports the following actions, with their supported filters:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"set")),": Overwrites the variable to the value in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"setValue")," property. Include the ",(0,r.mdx)("inlineCode",{parentName:"p"},"setValue")," property alongside the ",(0,r.mdx)("inlineCode",{parentName:"p"},"action")," property inside the variable. It supports the following filters: ",(0,r.mdx)("inlineCode",{parentName:"p"},"inList"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"isEmpty"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"isURL"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"isNotURL"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"startsWith"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"endsWith"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"contains"),"."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "evar1": {\n      "action": "set",\n      "setValue": "New value"\n    }\n  }\n}\n'))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"delete")),": Clears the variable value. It supports the following filters: ",(0,r.mdx)("inlineCode",{parentName:"p"},"inList"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"isURL"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"isNotURL"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"startsWith"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"endsWith"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"contains"),"."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "evar1": {\n      "action": "delete"\n    }\n  }\n}\n'))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"deleteQueryString")),": Remove the entire query string from a variable value. If the value does not appear to be a URL, no action is taken. Filters are not supported with this action."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "evar1": {\n      "action": "deleteQueryString"\n    }\n  }\n}\n'))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"deleteQueryStringParameters")),": Remove one or more query string parameters and their values from a variable. The query parameters removed are based on the string array ",(0,r.mdx)("inlineCode",{parentName:"p"},"parameters"),". Include the ",(0,r.mdx)("inlineCode",{parentName:"p"},"parameters")," array alongside the ",(0,r.mdx)("inlineCode",{parentName:"p"},"action")," property inside the variable. Up to 10 parameters are supported. If the value does not appear to be a URL, no action is taken. Filters are not supported with this action."),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "variables": {\n    "evar1": {\n      "action": "deleteQueryStringParameters",\n      "parameters": ["param1", "param2"]\n    }\n  }\n}\n')))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-endpoints-data-repair-json-body-md-c1111d2e302c244484b2.js.map