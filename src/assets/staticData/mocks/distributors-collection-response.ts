export {}

// import { appConfig } from 'configs/appConfig';

// const distributorCollectionHref = `${appConfig.apiHostURL}distributors`;
// export const mockDistributorCollectionResponse: any = {
//     [`${distributorCollectionHref}`]: {
//         _count: 1,
//         _links: {
//             next: {
//                 href: `${distributorCollectionHref}`
//             },
//             item: [
//                 {
//                     summary: {
//                         'distributor_detail:agent_type': 'other',
//                         'distributor_detail:business_unit': '1120860917',
//                         'distributor_detail:status': 'active',
//                         'distributor_detail:agent_type_label': 'Other',
//                         'distributor_detail:identifier': '1120860917',
//                         'distributor_detail:status_label': 'Active',
//                         'distributor_detail:job_description': 'Agents',
//                         'distributor_detail:network_label': 'EXTERNE : External network of agencies',
//                         'distributor_detail:unique_identifier': null,
//                         'distributor_detail:distributor_end_date': '9999-99-99',
//                         'distributor_detail:job_code': 'AGES',
//                         'distributor_detail:distributor_start_date': '0000-00-00'
//                     },
//                     name: '1120860917:TNR-BUSLINES-DSTRBTR-CAS01_108',
//                     href: `${distributorCollectionHref}/ID-4KDr3G8B`,
//                     title: '1120860917:Agents(AGES): REIT TNR-BUSLINES-DSTRBTR-CAS01_108'
//                 }
//             ],
//             last: {
//                 href: `${distributorCollectionHref}`
//             },
//             self: {
//                 name: 'Distributor',
//                 href: `${distributorCollectionHref}`,
//                 title: 'Distributor'
//             },
//             first: {
//                 href: `${distributorCollectionHref}`
//             }
//         },
//         _options: {
//             links: [
//                 {
//                     schema: {
//                         properties: {
//                             'distributor_detail:identifier': {
//                                 type: 'string',
//                                 maxLength: 10
//                             },
//                             distributor_end_date_eq: {
//                                 format: 'date',
//                                 type: 'string'
//                             },
//                             _status_report: {
//                                 type: 'boolean'
//                             },
//                             _start: {
//                                 type: 'integer',
//                                 minimum: 0
//                             },
//                             _embed: {
//                                 oneOf: [
//                                     {
//                                         const: 'none'
//                                     },
//                                     {
//                                         type: 'array',
//                                         items: {
//                                             type: 'string'
//                                         }
//                                     }
//                                 ]
//                             },
//                             _date_effect: {
//                                 format: 'date',
//                                 type: 'string'
//                             },
//                             'distributor_detail:unique_identifier': {
//                                 type: 'string',
//                                 maxLength: 10
//                             },
//                             _options: {
//                                 type: 'string'
//                             },
//                             _num: {
//                                 type: 'integer',
//                                 minimum: 20
//                             },
//                             _sort: {
//                                 type: 'array',
//                                 items: {
//                                     type: 'string',
//                                     enum: ['distributor_detail:identifier', '-distributor_detail:identifier']
//                                 }
//                             },
//                             'distributor_detail:organization': {
//                                 format: 'uri',
//                                 type: 'string'
//                             },
//                             _count: {
//                                 type: 'integer',
//                                 minimum: 500
//                             },
//                             distributor_end_date_eq_greater: {
//                                 format: 'date',
//                                 type: 'string'
//                             },
//                             distributor_start_date_eq: {
//                                 format: 'date',
//                                 type: 'string'
//                             },
//                             'distributor_detail:person': {
//                                 format: 'uri',
//                                 type: 'string'
//                             },
//                             distributor_start_date_eq_lower: {
//                                 format: 'date',
//                                 type: 'string'
//                             }
//                         }
//                     },
//                     method: 'GET',
//                     rel: 'search',
//                     mediaType: 'application/vnd.hal+json',
//                     href: `${distributorCollectionHref}`,
//                     title: 'Search for a Distributor  by criteria'
//                 }
//             ],
//             title: 'Distributor collection interactions',
//             properties: {
//                 oneOf: [
//                     {
//                         _count: {
//                             pattern: '^\\\\[0-9]+\\\\+$',
//                             type: 'string'
//                         }
//                     },
//                     {
//                         _count: {
//                             type: 'integer'
//                         }
//                     }
//                 ],
//                 _links: {
//                     type: 'object',
//                     properties: {
//                         item: {
//                             type: 'object',
//                             properties: {
//                                 summary: {
//                                     type: 'object',
//                                     properties: {
//                                         'distributor_detail:agent_type': {
//                                             oneOf: [
//                                                 {
//                                                     description: 'language:en-GB',
//                                                     title: 'Agent',
//                                                     enum: ['agent']
//                                                 },
//                                                 {
//                                                     description: 'language:en-GB',
//                                                     title: 'Broker',
//                                                     enum: ['broker']
//                                                 },
//                                                 {
//                                                     description: 'language:en-GB',
//                                                     title: 'Inspector',
//                                                     enum: ['inspector']
//                                                 },
//                                                 {
//                                                     description: 'language:en-GB',
//                                                     title: 'Insurer',
//                                                     enum: ['insurer']
//                                                 },
//                                                 {
//                                                     description: 'language:en-GB',
//                                                     title: 'Other',
//                                                     enum: ['other']
//                                                 }
//                                             ],
//                                             type: 'string'
//                                         },
//                                         'distributor_detail:business_unit': {
//                                             type: 'string',
//                                             maxLength: 10
//                                         },
//                                         'distributor_detail:status': {
//                                             oneOf: [
//                                                 {
//                                                     description: 'language:en-GB',
//                                                     title: 'Active',
//                                                     enum: ['active']
//                                                 },
//                                                 {
//                                                     description: 'language:en-GB',
//                                                     title: 'Terminated',
//                                                     enum: ['struck_off']
//                                                 },
//                                                 {
//                                                     description: 'language:en-GB',
//                                                     title: 'Suspended',
//                                                     enum: ['suspended']
//                                                 }
//                                             ],
//                                             type: 'string'
//                                         },
//                                         'distributor_detail:agent_type_label': {
//                                             type: 'string',
//                                             maxLength: 21
//                                         },
//                                         'distributor_detail:identifier': {
//                                             type: 'string',
//                                             maxLength: 10
//                                         },
//                                         'distributor_detail:status_label': {
//                                             type: 'string',
//                                             maxLength: 20
//                                         },
//                                         'distributor_detail:job_description': {
//                                             type: 'string',
//                                             maxLength: 80
//                                         },
//                                         'distributor_detail:network_label': {
//                                             type: 'string',
//                                             maxLength: 200
//                                         },
//                                         'distributor_detail:unique_identifier': {
//                                             type: 'string',
//                                             maxLength: 10
//                                         },
//                                         'distributor_detail:job_code': {
//                                             type: 'string',
//                                             maxLength: 9
//                                         },
//                                         'distributor_detail:distributor_end_date': {
//                                             format: 'date',
//                                             type: 'string'
//                                         },
//                                         'distributor_detail:distributor_start_date': {
//                                             format: 'date',
//                                             type: 'string'
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// };
